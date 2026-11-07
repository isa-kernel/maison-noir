"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Search, SlidersHorizontal, X } from "lucide-react";
import { formatKes, menuCategories, menuDishes, type MenuCategory, type MenuDish } from "@/data/menu";
import styles from "./MenuExperience.module.css";

export default function MenuExperience() {
  const [category, setCategory] = useState<MenuCategory>("All");
  const [query, setQuery] = useState("");
  const [dietary, setDietary] = useState<string[]>([]);
  const [selectedDish, setSelectedDish] = useState<MenuDish | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const filteredDishes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return menuDishes.filter((dish) => {
      const matchesCategory = category === "All" || dish.category === category;
      const matchesQuery = !normalizedQuery || `${dish.name} ${dish.description} ${dish.category}`.toLowerCase().includes(normalizedQuery);
      const matchesDietary = dietary.every((tag) => dish.dietary.includes(tag as MenuDish["dietary"][number]));
      return matchesCategory && matchesQuery && matchesDietary;
    });
  }, [category, query, dietary]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selectedDish && !dialog.open) dialog.showModal();
    if (!selectedDish && dialog.open) dialog.close();
  }, [selectedDish]);

  function toggleDietary(tag: string) {
    setDietary((current) => current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag]);
  }

  function closeDialog() {
    setSelectedDish(null);
  }

  return (
    <>
      <section className={styles.menuTools} aria-label="Find a dish">
        <div className={styles.searchWrap}>
          <Search size={18} aria-hidden="true" />
          <label className="sr-only" htmlFor="menu-search">Search dishes</label>
          <input id="menu-search" type="search" placeholder="Search the menu" value={query} onChange={(event) => setQuery(event.target.value)} />
          {query && <button type="button" className={styles.clearSearch} onClick={() => setQuery("")} aria-label="Clear search"><X size={16} /></button>}
        </div>
        <div className={styles.categoryList} aria-label="Menu categories">
          {menuCategories.map((item) => <button key={item} type="button" className={`${styles.categoryButton} ${category === item ? styles.categoryActive : ""}`} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <div className={styles.dietaryFilters}>
          <span><SlidersHorizontal size={14} /> DIETARY</span>
          {["Vegetarian", "Vegan", "Gluten-free"].map((tag) => <button key={tag} type="button" onClick={() => toggleDietary(tag)} className={dietary.includes(tag) ? styles.dietaryActive : ""} aria-pressed={dietary.includes(tag)}>{tag}</button>)}
        </div>
      </section>

      <section className={styles.resultsSection} aria-live="polite">
        <div className={styles.resultsMeta}><p>{filteredDishes.length} {filteredDishes.length === 1 ? "DISH" : "DISHES"}</p><p>SEASONAL · THOUGHTFUL · MADE TO SHARE</p></div>
        {filteredDishes.length > 0 ? (
          <div className={styles.dishGrid}>
            {filteredDishes.map((dish, index) => (
              <article className={styles.dishCard} key={dish.id}>
                <button type="button" className={styles.dishOpen} onClick={() => setSelectedDish(dish)} aria-label={`View details for ${dish.name}`}>
                  <span className={styles.imageWrap}>
                    <Image src={dish.image} alt={dish.imageAlt} fill sizes="(max-width: 640px) 88vw, (max-width: 1000px) 44vw, 30vw" quality={78} />
                    <span className={styles.imageIndex}>{String(index + 1).padStart(2, "0")}</span>
                    <span className={styles.openIcon}><ArrowUpRight size={19} /></span>
                  </span>
                  <span className={styles.dishInfo}>
                    <span className={styles.dishCategory}>{dish.category.toUpperCase()}</span>
                    <span className={styles.dishTitleRow}><span className={styles.dishName}>{dish.name}</span><span className={styles.dishPrice}>{formatKes(dish.price)}</span></span>
                    <span className={styles.dishDescription}>{dish.description}</span>
                    <span className={styles.dishTags}>{dish.dietary.map((tag) => <span key={tag}>{tag}</span>)}{dish.availability === "Seasonal" && <span>Seasonal</span>}</span>
                  </span>
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}><span>NOTHING ON THIS PLATE</span><h2 className="display-heading">No dishes found.</h2><p>Try another search or clear a filter to explore the menu.</p><button type="button" onClick={() => { setQuery(""); setCategory("All"); setDietary([]); }}>Clear all filters</button></div>
        )}
      </section>

      <dialog ref={dialogRef} className={styles.dishDialog} aria-labelledby="dish-dialog-title" onClose={closeDialog} onCancel={closeDialog}>
        {selectedDish && <div className={styles.dialogContent}>
          <div className={styles.dialogImage}><Image src={selectedDish.image} alt={selectedDish.imageAlt} fill sizes="(max-width: 700px) 100vw, 48vw" quality={82} /></div>
          <div className={styles.dialogDetails}>
            <button type="button" className={styles.dialogClose} onClick={closeDialog} aria-label="Close dish details"><X size={20} /></button>
            <p className={styles.dishCategory}>{selectedDish.category.toUpperCase()}</p>
            <h2 id="dish-dialog-title" className="display-heading">{selectedDish.name}</h2>
            <p className={styles.dialogDescription}>{selectedDish.detail}</p>
            <p className={styles.dialogPrice}>{formatKes(selectedDish.price)}</p>
            <div className={styles.dialogFacts}><div><span>DIETARY</span><p>{selectedDish.dietary.length ? selectedDish.dietary.join(" · ") : "No dietary label"}</p></div><div><span>ALLERGENS</span><p>{selectedDish.allergens.length ? selectedDish.allergens.join(" · ") : "None listed in demo data"}</p></div><div><span>AVAILABILITY</span><p>{selectedDish.availability}</p></div></div>
            <p className={styles.allergenNote}>Please speak with our team about allergies and dietary requirements. This demonstration menu is not a substitute for verified kitchen allergen information.</p>
          </div>
        </div>}
      </dialog>
    </>
  );
}

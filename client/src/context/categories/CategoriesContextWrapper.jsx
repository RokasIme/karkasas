import { useContext, useEffect, useState } from "react";
import { initialCategoriesContext } from "./initialCategoriesContext";
import { CategoriesContext } from "./CategoriesContext";
import { UserContext } from "../user/UserContext";

export function CategoriesContextWrapper(props) {
  const [publicCategories, setPublicCategories] = useState(initialCategoriesContext.publicCategories);
  const [adminCategories, setAdminCategories] = useState(initialCategoriesContext.adminCategories);

  const { isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    if (!isLoggedIn) {
      fetchPublicCategories();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchAdminCategories();
    }
  }, [isLoggedIn]);

  function fetchPublicCategories() {
    fetch("http://localhost:5445/api/public/categories", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setPublicCategoriesList(data.list);
        }
      })
      .catch(console.error);
  }

  function fetchAdminCategories() {
    fetch("http://localhost:5445/api/admin/categories", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setAdminCategoriesList(data.list);
        }
      })
      .catch(console.error);
  }

  function setPublicCategoriesList(data) {
    setPublicCategories(() => data);
  }

  function setAdminCategoriesList(data) {
    setAdminCategories(() => data);
  }

  function adminRefreshCategory() {
    fetchPublicCategories();
    fetchAdminCategories();
  }

  function adminDeleteCategory(id) {
    setPublicCategories((list) => list.filter((c) => c.id !== id));
    setAdminCategories((list) => list.filter((c) => c.id !== id));
  }

  const value = {
    publicCategories,
    adminCategories,
    setPublicCategoriesList,
    setAdminCategoriesList,
    adminRefreshCategory,
    adminDeleteCategory,
  };

  return <CategoriesContext.Provider value={value}>{props.children}</CategoriesContext.Provider>;
}

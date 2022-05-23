export const changeRows = (rowQuantity) => {
	document.documentElement.style.setProperty("--products-categories", +rowQuantity)
};
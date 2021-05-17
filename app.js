const searchBar = document.getElementById("my-input");
searchBar.addEventListener("keyup", onSearchBarKeyUp);

const dropdownResults = [
  "About",
  "Base",
  "Blog",
  "Contact",
  "Custom",
  "Support",
  "Tools",
];

function renderDropdownResults(results) {
  const dropdown = document.getElementById("my-dropdown");
  const currentDropdownResults = document.querySelectorAll("#my-dropdown a");

  for (let i = 0; i < currentDropdownResults.length; i++) {
    dropdown.removeChild(currentDropdownResults[i]);
  }

  results.forEach(function (result) {
    const resultElement = document.createElement("a");
    resultElement.href = `#${result.toLowerCase()}`;
    resultElement.innerText = result;
    dropdown.appendChild(resultElement);
  });
}

function onSearchBarKeyUp() {
  const searchBarContent = document
    .getElementById("my-input")
    .value.toLowerCase();

  let results = [];

  for (let i = 0; i < dropdownResults.length; i++) {
    if (dropdownResults[i].toLowerCase().startsWith(searchBarContent)) {
      results.push(dropdownResults[i]);
    }
  }

  renderDropdownResults(results);
}

function renderSearchBarResults(results) {
  const dropdown = document.getElementById("my-dropdown");
}

renderDropdownResults(dropdownResults);

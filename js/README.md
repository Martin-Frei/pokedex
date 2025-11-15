
---

## 🔧 How It Works

The app loads Pokémon from the PokeAPI in batches and displays them as cards.  
You can scroll endlessly, search in real time, and open a detail panel for full stats.

---

## ✨ Features

- 🔄 **Infinite scrolling** through all available Pokémon  
- 🔍 **Live search** with autocomplete suggestions  
- 📊 **Detail view** with stats, abilities, types, and moves  
- 🎨 **Color-coded Pokémon types**  
- ⚡ Fast, dependency-free implementation (Vanilla JS only)  

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla)  
- PokeAPI (REST)

---

## 📦 Code Overview

| File              | Purpose |
|------------------|---------|
| `api.js`         | Fetching Pokémon data from PokeAPI |
| `config.js`      | Configuration and global variables |
| `main.js`        | App initialization |
| `scroll.js`      | Infinite scroll logic |
| `search.js`      | Search and suggestion handling |
| `ui.js`          | Rendering cards and details |
| `template.js`    | HTML template helpers |

Documentation for each module is located in the corresponding `.md` files.

---

## ▶️ How to Run Locally

1. Download or clone the repository  
   ```bash
   git clone https://github.com/Martin-Frei/pokedex.git

2. Open **index.html** in any modern browser
→ Works in Chrome, Firefox, Safari, Edge

3. **Done !** – No backend or build system required

---

## Known Limitations

- **No caching** → API calls on every reload
- **Initial load** may be slow due to rate limits  
- **Long move list** → Scroll recommended in detail view 
- **Responsive layout** still improvable

---

## Future Improvements

- Caching with `localStorage`  
- Sorting options (Type, ID, Name)  
- Dark Mode  
- Mobile optimization  
- “Favorites” system  

---

Made with ❤️ by [Martin-Frei](https://github.com/Martin-Frei)

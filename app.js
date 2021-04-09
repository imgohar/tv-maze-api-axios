const form = document.getElementById("searchForm");
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {
        params: {
            q: searchTerm,
        },
    };
    const response = await axios.get(
        `http://api.tvmaze.com/search/shows`,
        config
    );
    makeData(response.data);
    form.elements.query.value = "";
});

// JUST FOR IMAGES
const makeImages = (shows) => {
    for (let result of shows) {
        console.log(result);
        if (result.show.image) {
            const img = document.createElement("img");
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
};

// FOR NAME IMAGE LANGUAGE AND DESCRIPTION
const makeData = (shows) => {
    for (let result of shows) {
        console.log(result);
        const newDiv = document.createElement("div");

        // FOR NAME
        const name = document.createElement("h2");
        name.append("Name: ");
        name.append(result.show.name);
        newDiv.append(name);

        // FOR LANGUAGE
        const language = document.createElement("p");
        language.append("Language: ");
        language.append(result.show.language);
        newDiv.append(language);

        // FOR DESCRIPTION
        const description = document.createElement("p");
        description.append("Description: ");
        description.append(result.show.summary);
        newDiv.append(description);

        if (result.show.image) {
            const img = document.createElement("img");
            img.src = result.show.image.medium;
            newDiv.append(img);
        }
        document.body.append(newDiv);
    }
};

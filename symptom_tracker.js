document.addEventListener("DOMContentLoaded", () => {
    const calendarContainer = document.getElementById("calendar");
    const daysInMonth = 30; // Assuming a 30-day month

    // Generate the cards for each day
    for (let day = 1; day <= daysInMonth; day++) {
        const card = document.createElement("div");
        card.classList.add("card-day", "col");

        const dayTitle = document.createElement("h5");
        dayTitle.textContent = `Day ${day}`;
        card.appendChild(dayTitle);

        // Textarea for entering symptoms
        const textarea = document.createElement("textarea");
        textarea.placeholder = "Enter symptoms...";
        textarea.id = `day-${day}`;
        textarea.value = localStorage.getItem(`symptoms-day-${day}`) || ""; // Load saved symptoms
        card.appendChild(textarea);

        // Save Button
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.classList.add("save-btn");
        saveButton.addEventListener("click", () => {
            const symptoms = textarea.value;
            localStorage.setItem(`symptoms-day-${day}`, symptoms); // Save to local storage
            alert(`Symptoms for Day ${day} saved!`);
        });
        card.appendChild(saveButton);

        // Append the card to the calendar container
        calendarContainer.appendChild(card);
    }
});

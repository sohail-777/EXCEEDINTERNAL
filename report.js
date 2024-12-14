document.addEventListener("DOMContentLoaded", () => {
    const reportContainer = document.getElementById("report-container");
  
    // Fetch data from local storage
    for (let day = 1; day <= 30; day++) {
      const symptoms = localStorage.getItem(`symptoms-day-${day}`);
  
      // Only display cards for days with symptoms logged
      if (symptoms && symptoms.trim() !== "") {
        const reportBox = document.createElement("div");
        reportBox.classList.add("report-box");
  
        // Create the content for each report box
        const dayTitle = document.createElement("h3");
        dayTitle.textContent = `Day ${day}`;
  
        const symptomText = document.createElement("p");
        symptomText.textContent = `Symptoms: ${symptoms}`;
  
        // Append elements to the report box
        reportBox.appendChild(dayTitle);
        reportBox.appendChild(symptomText);
  
        // Append the report box to the container
        reportContainer.appendChild(reportBox);
      }
    }
  
    // If no symptoms were logged
    if (reportContainer.children.length === 0) {
      const noDataMessage = document.createElement("p");
      noDataMessage.textContent = "No symptoms have been logged yet.";
      noDataMessage.style.fontSize = "1.2rem";
      noDataMessage.style.marginTop = "20px";
      reportContainer.appendChild(noDataMessage);
    }
  });
  
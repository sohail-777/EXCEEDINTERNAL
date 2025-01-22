document.addEventListener("DOMContentLoaded", () => {
    const symptomsData = [];
    for (let day = 1; day <= 30; day++) {
      const symptoms = localStorage.getItem(`symptoms-day-${day}`);
      if (symptoms && symptoms.trim() !== "") {
        symptomsData.push({ day, symptoms });
      }
    }

    let goodHealthCount = 0;
    let badHealthCount = 0;
  
    const symptomCategories = {}; 
    symptomsData.forEach((entry) => {
      const symptomsList = entry.symptoms.toLowerCase();
      if (
        symptomsList.includes("headache") ||
        symptomsList.includes("fever") ||
        symptomsList.includes("cough")
      ) {
        badHealthCount++;
      } else {
        goodHealthCount++;
      }
  
      symptomsList.split(",").forEach((symptom) => {
        const cleanSymptom = symptom.trim();
        symptomCategories[cleanSymptom] = (symptomCategories[cleanSymptom] || 0) + 1;
      });
    });
  
    const barCtx = document.getElementById("barChart").getContext("2d");
    new Chart(barCtx, {
      type: "bar",
      data: {
        labels: ["Good Health Days", "Bad Health Days"],
        datasets: [
          {
            label: "Days Count",
            data: [goodHealthCount, badHealthCount],
            backgroundColor: ["#4caf50", "#f44336"],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  
    const pieCtx = document.getElementById("pieChart").getContext("2d");
    new Chart(pieCtx, {
      type: "pie",
      data: {
        labels: Object.keys(symptomCategories),
        datasets: [
          {
            label: "Symptom Frequency",
            data: Object.values(symptomCategories),
            backgroundColor: [
              "#f4a261",
              "#e76f51",
              "#2a9d8f",
              "#264653",
              "#e9c46a",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });
  });
  
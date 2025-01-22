document.getElementById("generateReportBtn").addEventListener("click", () => {
    // Fetch symptoms data from local storage
    const symptomsData = [];
    for (let day = 1; day <= 30; day++) {
      const symptoms = localStorage.getItem(`symptoms-day-${day}`);
      if (symptoms && symptoms.trim() !== "") {
        symptomsData.push({ day, symptoms });
      }
    }
  
    // Generate the report text
    let reportText = "Health Tracker Symptom Report\n\n";
    symptomsData.forEach((entry) => {
      reportText += `Day ${entry.day}: ${entry.symptoms}\n`;
    });
  
    // If no data is available
    if (symptomsData.length === 0) {
      reportText += "No symptoms logged yet.";
    }
  
    // Create a downloadable file
    const blob = new Blob([reportText], { type: "text/plain" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "symptom_report.txt";
  
    // Trigger the download
    downloadLink.click();
  });
  
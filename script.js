var typed = new Typed("#typed", {
  strings: ["Front-End Developer", "UI/UX Developer"],
  typeSpeed: 50,
  backSpeed: 20,
  backDelay: 3000,
  showCursor: false,
  loop: true,
});

function theme() {
  const DarkBtn = document.getElementById('DarkBtn');
  const lightBtn = document.getElementById('lightBtn');
  
  document.body.classList.toggle('light');
  
  if (document.body.classList.contains('light')) {
    DarkBtn.style.display = 'none';
    lightBtn.style.display = 'block';
  } else {
    DarkBtn.style.display = 'block';
    lightBtn.style.display = 'none';
  }
}

function generateRandomContributions() {
  const startDate = new Date('2021-01-01');
  const endDate = new Date('2021-12-31');
  const dateArray = [];
  
  for (let week = 0; week < 52; week++) {
    const weekStart = new Date(startDate);
    weekStart.setDate(weekStart.getDate() + week * 7);
    
    if (Math.random() < 0.7) {
      const activeDays = Math.floor(Math.random() * 5) + 1;
      
      for (let day = 0; day < activeDays; day++) {
        const dayOffset = Math.floor(Math.random() * 7);
        const activityDate = new Date(weekStart);
        activityDate.setDate(activityDate.getDate() + dayOffset);
        
        if (activityDate > endDate) continue;
        
        const formattedDate = activityDate.toISOString().split('T')[0];
        
        const contributions = Math.floor(Math.random() * 4) + 1;
        for (let c = 0; c < contributions; c++) {
          dateArray.push(formattedDate);
        }
      }
    }
  }
  
  dateArray.sort();
  return dateArray.join(',');
}


function initializeActivityGraph() {
  const activityGraph = document.getElementById('activity-graph');
  
  if (activityGraph) {
    customElements.whenDefined('activity-graph').then(() => {
      activityGraph.setAttribute('activity-data', generateRandomContributions());
    }).catch(error => {
      console.error('Activity graph component not loaded:', error);
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  initializeActivityGraph();
  
  setTimeout(initializeActivityGraph, 1000);
});
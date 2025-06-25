if (!localStorage.getItem("jobs")) {
  localStorage.setItem("jobs", JSON.stringify([
    {
      title: "Frontend Intern",
      company: "Spotify",
      location: "Remote",
      link: "https://spotify.com",
      description: "6-month internship in frontend React development"
    }
  ]));
}
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("jobForm");
  const jobList = document.getElementById("jobList");

  function getJobsFromStorage() {
    return JSON.parse(localStorage.getItem("jobs")) || [];
  }

  function saveJob(job) {
    const jobs = getJobsFromStorage();
    jobs.push(job);
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }

  function renderJobs() {
    const jobs = getJobsFromStorage();
    jobList.innerHTML = "";
    jobs.forEach(job => {
      const card = document.createElement("div");
      card.classList.add("job-card");
      card.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p>${job.description}</p>
        <a href="${job.link}" class="btn" target="_blank">Apply</a>
      `;
      jobList.appendChild(card);
    });
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    const job = {
      title: form.title.value,
      company: form.company.value,
      location: form.location.value,
      description: form.description.value,
      link: form.link.value
    };
    saveJob(job);
    form.reset();
    renderJobs();
  });

  renderJobs(); // Load jobs on page load
});

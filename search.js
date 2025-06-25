document.addEventListener("DOMContentLoaded", () => {
  // Simulate login check
  const loggedIn = localStorage.getItem("loggedIn");

  if (!loggedIn) {
    alert("Please login to access the alumni search.");
    window.location.href = "register.html";
  }
});

function searchAlumni() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const results = document.getElementById("results");

  // Fake data for demo
  const alumniList = [
    { name: "Priya Shah", year: 2020, field: "Software Engineer" },
    { name: "Rahul Mehta", year: 2018, field: "Product Designer" },
    { name: "Aisha Khan", year: 2015, field: "Research Scientist" }
  ];

  const filtered = alumniList.filter(alumnus =>
    alumnus.name.toLowerCase().includes(query)
  );

  results.innerHTML = filtered.length
    ? filtered.map(a => `
      <div class="alumni-card">
        <h3>${a.name}</h3>
        <p>Class of ${a.year}</p>
        <p>${a.field}</p>
      </div>
    `).join("")
    : `<p>No results found.</p>`;
}

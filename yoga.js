
const yogaData = [
        // Format: { category, pose, muscle, sets }
        { category: "Ages 5 to 18", pose: "Vrikshasana", muscle: "Legs", sets: "2 sets, hold 30 sec each leg" },
        { category: "Ages 5 to 18", pose: "Navasana", muscle: "Core", sets: "3 sets, hold 20 sec" },
        { category: "Ages 5 to 18", pose: "Bhujangasana", muscle: "Back", sets: "3 sets, hold 20 to 30 sec" },
        { category: "Ages 5 to 18", pose: "Gomukhasana (arms only)", muscle: "Shoulders", sets: "2 sets each side, hold 30 sec" },
        { category: "Ages 5 to 18", pose: "Matsyasana", muscle: "Chest", sets: "2 sets, hold 20 sec" },
        { category: "Ages 5 to 18", pose: "Setu Bandhasana", muscle: "Hips", sets: "3 sets, hold 30 sec" },

        { category: "Ages 18 to 40", pose: "Virabhadrasana II", muscle: "Legs", sets: "2 sets each side, hold 30 sec" },
        { category: "Ages 18 to 40", pose: "Phalakasana", muscle: "Core", sets: "3 sets, hold 30 to 45 sec" },
        { category: "Ages 18 to 40", pose: "Salabhasana", muscle: "Back", sets: "3 sets, hold 20 sec" },
        { category: "Ages 18 to 40", pose: "Garudasana (arms only)", muscle: "Shoulders", sets: "2 sets each side, hold 30 sec" },
        { category: "Ages 18 to 40", pose: "Ustrasana", muscle: "Chest", sets: "2 sets, hold 20 to 30 sec" },
        { category: "Ages 18 to 40", pose: "Utkatasana", muscle: "Hips", sets: "3 sets, hold 30 sec" },

        { category: "Ages 40+", pose: "Tadasana", muscle: "Legs", sets: "3 sets, hold 1 min" },
        { category: "Ages 40+", pose: "Ardha Navasana", muscle: "Core", sets: "2 sets, hold 15 to 20 sec" },
        { category: "Ages 40+", pose: "Marjaryasana-Bitilasana", muscle: "Back", sets: "3 rounds of 5 breaths" },
        { category: "Ages 40+", pose: "Gomukhasana (arms only)", muscle: "Shoulders", sets: "2 sets each side, hold 30 sec" },
        { category: "Ages 40+", pose: "Matsyasana", muscle: "Chest", sets: "2 sets, hold 20 sec" },
        { category: "Ages 40+", pose: "Setu Bandhasana", muscle: "Hips", sets: "3 sets, hold 20 to 30 sec" },

        { category: "Breathing Problems", pose: "Tadasana", muscle: "Legs", sets: "3 sets, hold 1 min" },
        { category: "Breathing Problems", pose: "Navasana", muscle: "Core", sets: "2 sets, hold 15 sec" },
        { category: "Breathing Problems", pose: "Bhujangasana", muscle: "Back", sets: "3 sets, hold 20 sec" },
        { category: "Breathing Problems", pose: "Gomukhasana (arms only)", muscle: "Shoulders", sets: "2 sets each side, hold 30 sec" },
        { category: "Breathing Problems", pose: "Matsyasana", muscle: "Chest", sets: "2 sets, hold 20 to 30 sec" },
        { category: "Breathing Problems", pose: "Setu Bandhasana", muscle: "Hips", sets: "3 sets, hold 20 sec" },

        { category: "Challenge Exercises", pose: "Surya Namaskar", muscle: "Full Body", sets: "6 rounds" },
        { category: "Challenge Exercises", pose: "Phalakasana", muscle: "Core", sets: "3 sets, hold 30 sec" },
        { category: "Challenge Exercises", pose: "Salabhasana", muscle: "Back", sets: "3 sets, hold 20 sec" },
        { category: "Challenge Exercises", pose: "Virabhadrasana II", muscle: "Legs, Hips, Shoulders", sets: "2 sets each side, hold 30 sec" },
        { category: "Challenge Exercises", pose: "Ustrasana", muscle: "Chest", sets: "2 sets, hold 30 sec" },
        { category: "Challenge Exercises", pose: "Utkatasana", muscle: "Hips", sets: "3 sets, hold 30 sec" }
    ];

    function displayRecommendedPoses() {
        if(localStorage.getItem("age") === null || localStorage.getItem("breathing") === null || localStorage.getItem("muscles") === null) {
            alert("Please complete the personalization survey first.");
            window.location.assign("pers.html");
            return;
        }
    var name = document.getElementById("username");
            var agel = document.getElementById("age");
    var breathing = document.getElementById("brt"); 
    var muscles = document.getElementById("mus");
    const brtd = JSON.parse(localStorage.getItem("muscles")) || [];
    muscles.textContent = brtd.length ? brtd.join(", ") : "None selected";
    agel.innerHTML = localStorage.getItem("age");
    name.innerHTML = localStorage.getItem("name")
    breathing.innerHTML = localStorage.getItem("breathing");
    muscles.innerHTML = brtd;
        age = localStorage.getItem("age");
        breathing = localStorage.getItem("breathing");
        muscles = JSON.parse(localStorage.getItem("muscles") || "[]");

        categories = [];
        if (breathing === "yes") {categories.push("Breathing Problems");}
        else {
        if (age === "child") categories.push("Ages 5 to 18");
        if (age === "adult") categories.push("Ages 18 to 40");
        if (age === "senior") categories.push("Ages 40+");
    }
        

        categories.push("Challenge Exercises"); 

        tbody = document.getElementById("yogaBody");
        tbody.innerHTML = ""; 

        yogaData.forEach(entry => {
            entryMuscle = entry.muscle.toLowerCase();
            matchesCategory = categories.includes(entry.category);
            matchesMuscle = muscles.some(m => entryMuscle.includes(m.toLowerCase()));

            if (matchesCategory && matchesMuscle) {
                const row = `<tr>
                    <td>${entry.category}</td>
                    <td>${entry.pose}</td>
                    <td>${entry.muscle}</td>
                    <td>${entry.sets}</td>
                </tr>`;
                tbody.insertAdjacentHTML("beforeend", row);
            }
        });
    }

    window.onload = displayRecommendedPoses;

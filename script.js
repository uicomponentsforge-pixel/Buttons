// ==========================================
// 100 BUTTONS - JAVASCRIPT INTERACTIONS
// ==========================================

const $ = (id) => document.getElementById(id);

function message(text) {
    alert(text);
}

// 01 - Neon Glow
$("button-01").addEventListener("click", () => {
    document.body.classList.toggle("neon-mode");
});

// 02 - Rainbow Gradient
$("button-02").addEventListener("click", () => {
    document.body.style.background =
        "linear-gradient(135deg, #ff0080, #7928ca, #00c6ff)";
});

// 03 - Lightning
$("button-03").addEventListener("click", () => {
    document.body.classList.add("lightning-effect");
    setTimeout(() => document.body.classList.remove("lightning-effect"), 500);
});

// 04 - Fire
$("button-04").addEventListener("click", () => {
    message("🔥 Fire activated!");
});

// 05 - Ice
$("button-05").addEventListener("click", () => {
    document.body.style.filter = "hue-rotate(150deg)";
    setTimeout(() => document.body.style.filter = "", 1000);
});

// 06 - Water Ripple
$("button-06").addEventListener("click", () => {
    message("🌊 Ripple!");
});

// 07 - Galaxy
$("button-07").addEventListener("click", () => {
    document.body.style.background =
        "radial-gradient(circle, #41295a, #000000)";
});

// 08 - Dark Mode
$("button-08").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// 09 - Sun
$("button-09").addEventListener("click", () => {
    document.body.style.background = "#fff3b0";
});

// 10 - Moon
$("button-10").addEventListener("click", () => {
    document.body.style.background = "#111827";
});

// 11 - Glassmorphism
$("button-11").addEventListener("click", () => {
    document.body.classList.toggle("glass-mode");
});

// 12 - Glass
$("button-12").addEventListener("click", () => {
    message("🪟 Glass effect activated!");
});

// 13 - 3D Ice
$("button-13").addEventListener("click", () => {
    $("button-13").style.transform = "rotateX(360deg)";
});

// 14 - Color Picker
$("button-14").addEventListener("click", () => {
    const color = prompt("🎨 Enter a color:");
    if (color) document.body.style.background = color;
});

// 15 - Sparkle
$("button-15").addEventListener("click", () => {
    message("✨ Sparkles everywhere!");
});

// 16 - Particle
$("button-16").addEventListener("click", () => {
    message("💫 Particles activated!");
});

// 17 - Explosion
$("button-17").addEventListener("click", () => {
    message("💥 BOOM!");
});

// 18 - Rocket
$("button-18").addEventListener("click", () => {
    $("button-18").textContent = "🚀 Launching!";
});

// 19 - Game Start
$("button-19").addEventListener("click", () => {
    message("🎮 Game Started!");
});

// 20 - Trophy
$("button-20").addEventListener("click", () => {
    message("🏆 Achievement unlocked!");
});

// 21 - Like
$("button-21").addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
});

// 22 - Like / Unlike
$("button-22").addEventListener("click", (e) => {
    e.currentTarget.textContent =
        e.currentTarget.textContent.includes("Unlike")
            ? "👍 Like"
            : "👎 Unlike";
});

// 23 - Favorite
$("button-23").addEventListener("click", (e) => {
    e.currentTarget.textContent = "⭐ Favorited!";
});

// 24 - Notification
$("button-24").addEventListener("click", () => {
    message("🔔 You have a notification!");
});

// 25 - Notification Toggle
$("button-25").addEventListener("click", (e) => {
    e.currentTarget.textContent =
        e.currentTarget.textContent.includes("🔕")
            ? "🔔 Notifications"
            : "🔕 Muted";
});

// 26 - Lock
$("button-26").addEventListener("click", (e) => {
    e.currentTarget.textContent =
        e.currentTarget.textContent.includes("Unlock")
            ? "🔒 Locked"
            : "🔓 Unlocked";
});

// 27 - Show / Hide
$("button-27").addEventListener("click", () => {
    document.body.classList.toggle("hidden-content");
});

// 28 - Sound
$("button-28").addEventListener("click", (e) => {
    e.currentTarget.textContent = "🔊 Sound ON";
});

// 29 - Mute
$("button-29").addEventListener("click", (e) => {
    e.currentTarget.textContent = "🔇 Muted";
});

// 30 - Play / Pause
$("button-30").addEventListener("click", (e) => {
    e.currentTarget.textContent =
        e.currentTarget.textContent.includes("Pause")
            ? "▶️ Play"
            : "⏸️ Pause";
});

// 31 - Previous
$("button-31").addEventListener("click", () => {
    message("⏮️ Previous");
});

// 32 - Next
$("button-32").addEventListener("click", () => {
    message("⏭️ Next");
});

// 33 - Rewind
$("button-33").addEventListener("click", () => {
    message("⏪ Rewind 10 seconds");
});

// 34 - Fast Forward
$("button-34").addEventListener("click", () => {
    message("⏩ Fast-forward 10 seconds");
});

// 35 - Stop
$("button-35").addEventListener("click", () => {
    message("⏹️ Stopped");
});

// 36 - Record
$("button-36").addEventListener("click", (e) => {
    e.currentTarget.textContent = "⏺️ Recording...";
});

// 37 - Refresh
$("button-37").addEventListener("click", () => {
    location.reload();
});

// 38 - Download
$("button-38").addEventListener("click", () => {
    const file = new Blob(["Button Project"], { type: "text/plain" });
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.download = "button-project.txt";
    a.click();
    URL.revokeObjectURL(url);
});

// 39 - Upload
$("button-39").addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.click();
});

// 40 - Copy
$("button-40").addEventListener("click", async () => {
    await navigator.clipboard.writeText("100 Buttons Project");
    message("📋 Copied!");
});

// 41 - Pin
$("button-41").addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
});

// 42 - Delete
$("button-42").addEventListener("click", () => {
    message("🗑️ Delete action selected");
});

// 43 - Edit
$("button-43").addEventListener("click", () => {
    const text = prompt("✏️ Enter new text:");
    if (text) $("button-43").textContent = text;
});

// 44 - Save
$("button-44").addEventListener("click", () => {
    message("💾 Saved!");
});

// 45 - Search
$("button-45").addEventListener("click", () => {
    const search = prompt("🔍 Search:");
    if (search) message("Searching for: " + search);
});

// 46 - Add
$("button-46").addEventListener("click", () => {
    message("➕ Added!");
});

// 47 - Remove
$("button-47").addEventListener("click", () => {
    message("➖ Removed!");
});

// 48 - Menu
$("button-48").addEventListener("click", () => {
    message("☰ Menu opened");
});

// 49 - Close
$("button-49").addEventListener("click", () => {
    message("✖️ Close clicked");
});

// 50 - Confirm
$("button-50").addEventListener("click", () => {
    if (confirm("✅ Confirm this action?")) {
        message("Confirmed!");
    }
});

// 51 - Cancel
$("button-51").addEventListener("click", () => {
    message("❌ Cancelled");
});

// 52 - Warning
$("button-52").addEventListener("click", () => {
    alert("⚠️ Warning!");
});

// 53 - Info
$("button-53").addEventListener("click", () => {
    message("ℹ️ Information");
});

// 54 - Help
$("button-54").addEventListener("click", () => {
    message("❓ Help opened");
});

// 55 - Login
$("button-55").addEventListener("click", () => {
    message("🔑 Login button clicked");
});

// 56 - Logout
$("button-56").addEventListener("click", () => {
    message("🚪 Logged out");
});

// 57 - Profile
$("button-57").addEventListener("click", () => {
    message("👤 Profile opened");
});

// 58 - Settings
$("button-58").addEventListener("click", () => {
    message("⚙️ Settings opened");
});

// 59 - Home
$("button-59").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// 60 - Email
$("button-60").addEventListener("click", () => {
    window.location.href = "mailto:";
});

// 61 - Phone
$("button-61").addEventListener("click", () => {
    message("📱 Phone action");
});

// 62 - Website
$("button-62").addEventListener("click", () => {
    window.open("https://google.com", "_blank");
});

// 63 - Share
$("button-63").addEventListener("click", async () => {
    if (navigator.share) {
        await navigator.share({
            title: "100 Buttons",
            text: "Check out my 100 buttons project!"
        });
    } else {
        message("📤 Sharing isn't supported here.");
    }
});

// 64 - Link
$("button-64").addEventListener("click", () => {
    window.open("https://google.com", "_blank");
});

// 65 - Read More
$("button-65").addEventListener("click", () => {
    message("📖 More content coming!");
});

// 66 - Scroll Down
$("button-66").addEventListener("click", () => {
    window.scrollBy({ top: 500, behavior: "smooth" });
});

// 67 - Scroll Top
$("button-67").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// 68 - Magnetic
$("button-68").addEventListener("mousemove", (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.2;
    const y = (e.clientY - r.top - r.height / 2) * 0.2;
    e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
});

$("button-68").addEventListener("mouseleave", (e) => {
    e.currentTarget.style.transform = "";
});

// 69 - Cursor Follow
$("button-69").addEventListener("mousemove", (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
});

// 70 - Target
$("button-70").addEventListener("click", () => {
    message("🎯 Target hit!");
});

// 71 - Spinning
$("button-71").addEventListener("click", (e) => {
    e.currentTarget.classList.add("spin");
    setTimeout(() => e.currentTarget.classList.remove("spin"), 1000);
});

// 72 - Loading
$("button-72").addEventListener("click", (e) => {
    e.currentTarget.textContent = "⏳ Loading...";
    setTimeout(() => {
        e.currentTarget.textContent = "✅ Done!";
    }, 1500);
});

// 73 - Counter
let counter = 0;
$("button-73").addEventListener("click", (e) => {
    counter++;
    e.currentTarget.textContent = "🔢 " + counter;
});

// 74 - Random
$("button-74").addEventListener("click", () => {
    const colors = ["red", "blue", "green", "purple", "orange"];
    document.body.style.background =
        colors[Math.floor(Math.random() * colors.length)];
});

// 75 - Slot Machine
$("button-75").addEventListener("click", (e) => {
    const symbols = ["🎰", "🍒", "⭐", "💎", "7️⃣"];
    e.currentTarget.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];
});

// 76 - Coin Flip
$("button-76").addEventListener("click", () => {
    message(Math.random() < 0.5 ? "🪙 Heads!" : "🪙 Tails!");
});

// 77 - Music
$("button-77").addEventListener("click", () => {
    message("🎵 Music button clicked");
});

// 78 - Microphone
$("button-78").addEventListener("click", () => {
    message("🎤 Microphone activated");
});

// 79 - Camera
$("button-79").addEventListener("click", () => {
    message("📸 Camera button clicked");
});

// 80 - Video
$("button-80").addEventListener("click", () => {
    message("🎥 Video button clicked");
});

// 81 - Gallery
$("button-81").addEventListener("click", () => {
    message("🖼️ Gallery opened");
});

// 82 - Cart
$("button-82").addEventListener("click", () => {
    message("🛒 Added to cart!");
});

// 83 - Payment
$("button-83").addEventListener("click", () => {
    message("💳 Payment selected");
});

// 84 - Price
$("button-84").addEventListener("click", () => {
    message("💰 Price: $99");
});

// 85 - Shop
$("button-85").addEventListener("click", () => {
    message("🛍️ Shop opened");
});

// 86 - Gift
$("button-86").addEventListener("click", () => {
    message("🎁 You received a virtual gift!");
});

// 87 - Code
$("button-87").addEventListener("click", () => {
    navigator.clipboard.writeText("<button>Hello</button>");
    message("🧑‍💻 Code copied!");
});

// 88 - Document
$("button-88").addEventListener("click", () => {
    message("📄 Document opened");
});

// 89 - Print
$("button-89").addEventListener("click", () => {
    window.print();
});

// 90 - Folder
$("button-90").addEventListener("click", () => {
    message("📂 Folder opened");
});

// 91 - Secure
$("button-91").addEventListener("click", () => {
    message("🔐 Secure mode enabled");
});

// 92 - Security
$("button-92").addEventListener("click", () => {
    message("🛡️ Security check complete");
});

// 93 - AI
$("button-93").addEventListener("click", () => {
    message("🤖 AI activated!");
});

// 94 - Smart
$("button-94").addEventListener("click", () => {
    message("🧠 Smart mode activated!");
});

// 95 - Magic
$("button-95").addEventListener("click", (e) => {
    e.currentTarget.textContent = "🪄✨ Magic!";
});

// 96 - Cyberpunk
$("button-96").addEventListener("click", () => {
    document.body.classList.toggle("cyberpunk-mode");
});

// 97 - Arcade
$("button-97").addEventListener("click", () => {
    message("👾 Arcade mode!");
});

// 98 - Speed
$("button-98").addEventListener("click", (e) => {
    e.currentTarget.style.transform = "translateX(100px)";
    setTimeout(() => e.currentTarget.style.transform = "", 500);
});

// 99 - World
$("button-99").addEventListener("click", () => {
    message("🌍 World mode activated!");
});

// 100 - Emergency
$("button-100").addEventListener("click", () => {
    alert("🚨 EMERGENCY BUTTON ACTIVATED!");
});
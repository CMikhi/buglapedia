// Bug Orders Database
const bugOrders = [
    {
        name: "Coleoptera",
        commonName: "Beetles",
        icon: "🪲",
        description: "The largest order of insects, comprising about 40% of all known insect species. Beetles have hardened forewings called elytra that protect their hindwings.",
        species: "~400,000",
        size: "0.3-180mm",
        tags: ["common", "flying"],
        examples: "Ladybugs, fireflies, weevils, stag beetles"
    },
    {
        name: "Lepidoptera",
        commonName: "Butterflies & Moths",
        icon: "🦋",
        description: "Characterized by scaled wings and complete metamorphosis. Adults typically have a coiled proboscis for feeding on nectar.",
        species: "~180,000",
        size: "2-300mm",
        tags: ["common", "flying"],
        examples: "Monarch butterfly, luna moth, swallowtails"
    },
    {
        name: "Hymenoptera",
        commonName: "Bees, Wasps & Ants",
        icon: "🐝",
        description: "Social or solitary insects with two pairs of membranous wings. Many species are crucial pollinators or play important roles in ecosystems.",
        species: "~150,000",
        size: "0.5-50mm",
        tags: ["common", "flying"],
        examples: "Honeybees, carpenter ants, paper wasps"
    },
    {
        name: "Diptera",
        commonName: "Flies",
        icon: "🪰",
        description: "Distinguished by having only one pair of functional wings. The hindwings are reduced to small club-shaped halteres used for balance.",
        species: "~160,000",
        size: "1-60mm",
        tags: ["common", "flying"],
        examples: "House flies, mosquitoes, fruit flies, crane flies"
    },
    {
        name: "Hemiptera",
        commonName: "True Bugs",
        icon: "🐞",
        description: "Characterized by piercing-sucking mouthparts. This diverse order includes both terrestrial and aquatic species.",
        species: "~80,000",
        size: "1-110mm",
        tags: ["common"],
        examples: "Cicadas, aphids, stink bugs, water striders"
    },
    {
        name: "Orthoptera",
        commonName: "Grasshoppers & Crickets",
        icon: "🦗",
        description: "Known for their powerful hind legs adapted for jumping and their ability to produce sounds through stridulation.",
        species: "~25,000",
        size: "5-150mm",
        tags: ["common"],
        examples: "Locusts, katydids, field crickets, mole crickets"
    },
    {
        name: "Odonata",
        commonName: "Dragonflies & Damselflies",
        icon: "🛸",
        description: "Ancient predatory insects with large compound eyes, elongated bodies, and two pairs of transparent wings. Nymphs are aquatic.",
        species: "~6,000",
        size: "15-120mm",
        tags: ["flying", "aquatic"],
        examples: "Blue dasher, ebony jewelwing, giant petaltail"
    },
    {
        name: "Mantodea",
        commonName: "Mantises",
        icon: "🦗",
        description: "Predatory insects known for their distinctive 'praying' posture with folded forelegs. They have excellent vision and lightning-fast strikes.",
        species: "~2,400",
        size: "10-150mm",
        tags: [],
        examples: "Praying mantis, orchid mantis, Chinese mantis"
    },
    {
        name: "Blattodea",
        commonName: "Cockroaches & Termites",
        icon: "🪳",
        description: "A diverse order including both solitary cockroaches and highly social termites. Many species play important roles in decomposition.",
        species: "~10,000",
        size: "3-100mm",
        tags: ["common"],
        examples: "German cockroach, subterranean termites, Madagascar hissing cockroach"
    },
    {
        name: "Phasmida",
        commonName: "Stick & Leaf Insects",
        icon: "🌿",
        description: "Masters of camouflage that resemble sticks, leaves, or bark. They move slowly and rely on their disguise for protection.",
        species: "~3,000",
        size: "15-350mm",
        tags: [],
        examples: "Walking stick, leaf insect, giant prickly stick insect"
    },
    {
        name: "Neuroptera",
        commonName: "Lacewings",
        icon: "🦟",
        description: "Delicate insects with net-veined wings. Larvae are voracious predators, often called 'aphid lions' for their pest-control abilities.",
        species: "~6,000",
        size: "5-65mm",
        tags: ["flying"],
        examples: "Green lacewing, antlion, owlfly, mantisfly"
    },
    {
        name: "Trichoptera",
        commonName: "Caddisflies",
        icon: "🦟",
        description: "Moth-like insects whose aquatic larvae build protective cases from silk and debris. Important indicators of water quality.",
        species: "~14,500",
        size: "2-40mm",
        tags: ["aquatic", "flying"],
        examples: "Giant caddisfly, northern caddisfly, longhorn caddis"
    },
    {
        name: "Ephemeroptera",
        commonName: "Mayflies",
        icon: "🦟",
        description: "Ancient insects with extremely short adult lifespans (hours to days). Nymphs are aquatic and can live for years.",
        species: "~3,000",
        size: "3-30mm",
        tags: ["aquatic", "flying"],
        examples: "Common burrower, blue-winged olive, hexagenia"
    },
    {
        name: "Dermaptera",
        commonName: "Earwigs",
        icon: "🦂",
        description: "Nocturnal insects with distinctive pincer-like cerci at the end of their abdomen. Despite myths, they don't crawl into ears.",
        species: "~2,000",
        size: "5-50mm",
        tags: [],
        examples: "European earwig, ring-legged earwig, maritime earwig"
    },
    {
        name: "Plecoptera",
        commonName: "Stoneflies",
        icon: "🦟",
        description: "Primitive insects with aquatic nymphs that require clean, well-oxygenated water. Excellent indicators of stream health.",
        species: "~3,500",
        size: "5-60mm",
        tags: ["aquatic"],
        examples: "Giant stonefly, winter stonefly, golden stonefly"
    },
    {
        name: "Siphonaptera",
        commonName: "Fleas",
        icon: "🦟",
        description: "Wingless parasitic insects with laterally compressed bodies and powerful legs for jumping. Feed on blood of mammals and birds.",
        species: "~2,500",
        size: "1-10mm",
        tags: [],
        examples: "Cat flea, human flea, Oriental rat flea"
    }
];

// State management
let currentFilter = 'all';
let searchQuery = '';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderBugs();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchBox = document.getElementById('searchBox');
    searchBox.addEventListener('input', function(e) {
        searchQuery = e.target.value.toLowerCase();
        renderBugs();
    });

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Update filter
            currentFilter = this.dataset.filter;
            renderBugs();
        });
    });
}

// Filter bugs based on current filters
function filterBugs() {
    return bugOrders.filter(bug => {
        // Apply category filter
        const matchesFilter = currentFilter === 'all' || bug.tags.includes(currentFilter);
        
        // Apply search filter
        const matchesSearch = searchQuery === '' || 
            bug.name.toLowerCase().includes(searchQuery) ||
            bug.commonName.toLowerCase().includes(searchQuery) ||
            bug.description.toLowerCase().includes(searchQuery) ||
            bug.examples.toLowerCase().includes(searchQuery);
        
        return matchesFilter && matchesSearch;
    });
}

// Render bug cards
function renderBugs() {
    const bugGrid = document.getElementById('bugGrid');
    const filteredBugs = filterBugs();
    
    if (filteredBugs.length === 0) {
        bugGrid.innerHTML = '<div class="no-results">No bugs found matching your criteria. Try a different search or filter!</div>';
        return;
    }
    
    bugGrid.innerHTML = filteredBugs.map(bug => createBugCard(bug)).join('');
    
    // Add click animation to cards
    document.querySelectorAll('.bug-card').forEach(card => {
        card.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    });
}

// Create a bug card HTML
function createBugCard(bug) {
    const tagsHTML = bug.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    return `
        <div class="bug-card">
            <div class="bug-icon">${bug.icon}</div>
            <div class="bug-content">
                <h2>${bug.commonName}</h2>
                <div class="scientific-name">${bug.name}</div>
                <div class="description">${bug.description}</div>
                <div class="bug-stats">
                    <div class="stat">
                        <span class="stat-label">Known Species</span>
                        <span class="stat-value">${bug.species}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Size Range</span>
                        <span class="stat-value">${bug.size}</span>
                    </div>
                </div>
                <div class="description" style="margin-top: 15px;">
                    <strong>Examples:</strong> ${bug.examples}
                </div>
                ${tagsHTML ? `<div class="tags">${tagsHTML}</div>` : ''}
            </div>
        </div>
    `;
}

// Add smooth scrolling for better UX
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(22, 33, 62, 0.98)';
    } else {
        nav.style.background = 'var(--card-bg)';
    }
});

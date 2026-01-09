// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="md/Association_Rule_minning.html"><strong aria-hidden="true">1.</strong> Association_Rule_minning</a></li><li class="chapter-item expanded "><a href="md/BinaryHeap2FibonacciHeap.html"><strong aria-hidden="true">2.</strong> BinaryHeap2FibonacciHeap</a></li><li class="chapter-item expanded "><a href="md/Colab_hotkey.html"><strong aria-hidden="true">3.</strong> Colab_hotkey</a></li><li class="chapter-item expanded "><a href="md/LoawMath.html"><strong aria-hidden="true">4.</strong> LoawMath</a></li><li class="chapter-item expanded "><a href="md/MasterTheorem.html"><strong aria-hidden="true">5.</strong> MasterTheorem</a></li><li class="chapter-item expanded "><a href="md/OpenIdProject.html"><strong aria-hidden="true">6.</strong> OpenIdProject</a></li><li class="chapter-item expanded "><a href="md/Pandas_merge.html"><strong aria-hidden="true">7.</strong> Pandas_merge</a></li><li class="chapter-item expanded "><a href="md/Philosophie.html"><strong aria-hidden="true">8.</strong> Philosophie</a></li><li class="chapter-item expanded "><a href="md/PythonWith~.html"><strong aria-hidden="true">9.</strong> PythonWith~</a></li><li class="chapter-item expanded "><a href="md/Tools.html"><strong aria-hidden="true">10.</strong> Tools</a></li><li class="chapter-item expanded "><a href="md/UniversalHashing.html"><strong aria-hidden="true">11.</strong> UniversalHashing</a></li><li class="chapter-item expanded "><a href="md/disable_device.html"><strong aria-hidden="true">12.</strong> disable_device</a></li><li class="chapter-item expanded "><a href="md/disable_keyboard.html"><strong aria-hidden="true">13.</strong> disable_keyboard</a></li><li class="chapter-item expanded "><a href="md/docker_gpu.html"><strong aria-hidden="true">14.</strong> docker_gpu</a></li><li class="chapter-item expanded "><a href="md/langchain_math_tools.html"><strong aria-hidden="true">15.</strong> langchain_math_tools</a></li><li class="chapter-item expanded "><a href="md/linux_jobs.html"><strong aria-hidden="true">16.</strong> linux_jobs</a></li><li class="chapter-item expanded "><a href="md/lsp.html"><strong aria-hidden="true">17.</strong> lsp</a></li><li class="chapter-item expanded "><a href="md/positionEmbedding.html"><strong aria-hidden="true">18.</strong> positionEmbedding</a></li><li class="chapter-item expanded "><a href="md/repair_grub.html"><strong aria-hidden="true">19.</strong> repair_grub</a></li><li class="chapter-item expanded "><a href="md/uwsgi_deploy.html"><strong aria-hidden="true">20.</strong> uwsgi_deploy</a></li><li class="chapter-item expanded "><a href="md/yarnInstall.html"><strong aria-hidden="true">21.</strong> yarnInstall</a></li><li class="chapter-item expanded "><a href="md/受难记.html"><strong aria-hidden="true">22.</strong> 受难记</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);

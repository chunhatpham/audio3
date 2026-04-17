// ================= LOADING EFFECT =================
window.executeWithLoading = function(callback, delay = 600) {
    const loader = document.getElementById('global-loader-overlay');
    loader.style.display = 'flex';
    // Đợi 1 chút xíu để DOM render cái loader
    setTimeout(() => { loader.classList.add('show'); }, 10);
    
    setTimeout(() => {
        if(typeof callback === 'function') callback();
        loader.classList.remove('show');
        setTimeout(() => { loader.style.display = 'none'; }, 300); 
    }, delay);
};

// ================= KHO DỮ LIỆU PHIM CHÍNH TỔNG HỢP =================
const randomRedirectLinks = [
    "https://vt.tiktok.com/ZS9eQnVNkWqrH-NDwQg/",
    "https://vt.tiktok.com/ZS9eQnpk1jcTU-0sAGn/",
    "https://vt.tiktok.com/ZS9eQntSfgCqA-VUA7g/",
    "https://vt.tiktok.com/ZS9RdMkvcsYJR-5XXqs/",
    "https://vt.tiktok.com/ZS9RdMDFCcqDr-Wkvnr/",
    "https://vt.tiktok.com/ZS9RdM5HDghE3-elmmE/",
    "https://vt.tiktok.com/ZS9RdMaACXLWq-W52rL/",
    "https://vt.tiktok.com/ZS9RdMQDJELpG-ro8Sc/",
    "https://vt.tiktok.com/ZS9RdMqtxbCqJ-sPyPM/",
    "https://vt.tiktok.com/ZS9RdMnUbwUyf-ajbD7/",
    "https://vt.tiktok.com/ZS9RdMWyakByQ-0Uozs/",
    "https://vt.tiktok.com/ZS9RdMTBSXFH1-4eGKd/",
    "https://vt.tiktok.com/ZS989E7k8ANFf-FKqU9/",
    "https://vt.tiktok.com/ZS989ETLJpFgc-muMiW/",
    "https://vt.tiktok.com/ZS98nGsEU2MW9-bnMez/",
    "https://vt.tiktok.com/ZS98nG7KYH7nH-tGp2g/",
    "https://vt.tiktok.com/ZS983jmkcJ5Yv-HhrHa/",
    "https://vt.tiktok.com/ZS983jxss8YFG-ncouM/",
];

window.realMoviesDatabase = [
    { title: "Bố Và Mẹ Của Tôi Nhất", img: "https://i.postimg.cc/Cxsf18z0/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Tôi Là Phản Diện Mạnh Nhất", img: "https://i.postimg.cc/Gpc0d9pS/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Bỏ Vợ Và Ra Đi", img: "https://i.postimg.cc/yxy5Thng/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Người Yêu Ngày Cha Qua Đời", img: "https://i.postimg.cc/63MWv0rs/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Chặn Đầu Xe Ô Tô", img: "https://i.postimg.cc/bJH695MW/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Chân Sai Vặt Của Họ", img: "https://i.postimg.cc/5097CBbV/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Bạn Thân Người Yêu Cũ", img: "https://i.postimg.cc/kgbw1Xmc/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Hoán Đổi Thân Thế Rồi", img: "https://i.postimg.cc/6q3LbhX2/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Tôi Buổi Tối Hôm Đấy", img: "https://i.postimg.cc/mhf9n6PN/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Ra Đi Để Giữ Lại", img: "https://i.postimg.cc/MTxRrjgG/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Sự Kiện Cho Đàn Ông", img: "https://i.postimg.cc/x1C3Q5ms/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Tôi Kháng Lại Tất Cả", img: "https://i.postimg.cc/y8dyKjRR/IMG_0690.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Hoa Khôi Cố Gắng Tìm", img: "https://i.postimg.cc/t4TNbk65/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Người Cuồng Em Trai Nhất", img: "https://i.postimg.cc/QCj14wm3/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Chị Gái Của Tôi Mà", img: "https://i.postimg.cc/Vv4M3gZz/DEAAFC7F_55EF_416F_995D_A22803B5A23F.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Vợ Tôi Lạnh Lùng Quá", img: "https://i.postimg.cc/RC7y5zTy/54CEAEE5_2DA5_4922_BFEF_8BC1069C950B.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Ngày Bạn Gái Rời Đi", img: "https://i.postimg.cc/SQ63FpG5/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Người Bố Chức Bí Mật", img: "https://i.postimg.cc/SNCpCqdh/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Các Chị Gái Của Tôi", img: "https://i.postimg.cc/fTmhmZCh/IMG_0555.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Hình Mẫu Của Tôi Đấy", img: "https://i.postimg.cc/15W5bPn3/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Gặp Gỡ Với Hoa Khôi", img: "https://i.postimg.cc/SNZNHq2N/IMG_0511.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Rời Xa Khỏi Vợ Mình", img: "https://i.postimg.cc/zvKPLnW8/IMG_0409.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Ngày Đầu Tôi Trở Về Nhà", img: "https://i.postimg.cc/MHVrcyRW/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Cô Gái Tìm Kiếm Tôi", img: "https://i.postimg.cc/0Nx0h3NT/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Tôi Là Nỗi Sợ Hãi", img: "https://i.postimg.cc/8P6dThq6/IMG-0321.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Lời Dạy Bảo Của Mẹ", img: "https://i.postimg.cc/qvB71rXH/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Bạn Thân Của Chị Gái", img: "https://i.postimg.cc/nhVL3xKW/IMG_0320.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Tôi Trở Thành Tỉ Phú", img: "https://i.postimg.cc/P5Z9MP5W/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Ba Em Gái Của Tôi", img: "https://i.postimg.cc/wvbm8gXT/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Bạn Gái Cũ Chứng Minh", img: "https://i.postimg.cc/qRZ3V4s4/IMG_0223.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Tôi Cố Gắng Chịu Đựng", img: "https://i.postimg.cc/FK96b6vH/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Bài Mới Của Bạn Gái", img: "https://i.postimg.cc/K8qF1vGL/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Tiểu Thuyết Của Nam Chính", img: "https://i.postimg.cc/2SPhNYsL/IMG-0191.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Vợ Tổng Tài Của Tôi", img: "https://i.postimg.cc/mrwq6mq4/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Chấm Dứt Với Gia Đình", img: "https://i.postimg.cc/bwsGz4bW/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Cố Gắng Rời Xa Em", img: "https://i.postimg.cc/QC9pvvfg/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Chị Gái Nằm Với Tôi", img: "https://i.postimg.cc/2S1dmdbR/978D6BC2-7590-4E08-8877-DE859DBF5989.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Cha Mẹ Bắt Tôi Về", img: "https://i.postimg.cc/52pcdVCQ/IMG-0121.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Chị Gái Loại Bỏ Tôi", img: "https://i.postimg.cc/VNVS5TSf/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Các Chị Gái Của Tôi", img: "https://i.postimg.cc/rF6BqzKX/IMG-0092.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Tôi Đã Bị Thay Thế", img: "https://i.postimg.cc/BvxsGDCf/IMG-0091.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "So Tài Với Trà Xanh", img: "https://i.postimg.cc/B6rxPrK8/E68159C7-168F-4807-8399-14105CD445F0.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Bắt Nạt Cô Thanh Mai", img: "https://i.postimg.cc/bwcDLQYK/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Tôi Tránh Xa Thanh Mai", img: "https://i.postimg.cc/90kqjPQN/proxy-img.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Đã Thật Lòng Với Em", img: "https://i.postimg.cc/MGwKgFzr/proxy-img.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Trợt Tỉnh Ra Sự Thật", img: "https://i.postimg.cc/rpgxmhPx/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Lấy Hoa Khôi Lạnh Lùng", img: "https://i.postimg.cc/htmQfNg9/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Nữ Thần Liễu Như Yên", img: "https://i.postimg.cc/y8nPZmYS/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Tôi Nằm Trên Ván Cược", img: "https://i.postimg.cc/D0shyZ6b/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Tái Sinh Cùng Vợ Mình", img: "https://i.postimg.cc/y6nhBL9c/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Không Cùng Thế Giới Mà", img: "https://i.postimg.cc/3wJfK4Ns/gen.jpg", tag: "NEW", desc: "Vừa ra mắt" },
    { title: "Hoàn Hảo Với Em Gái", img: "https://i.postimg.cc/PJs2GjKT/IMG-1498.jpg", tag: "NEW", desc: "Vừa ra mắt" }
];

window.renderLatestMovies = function() {
    const latestGrid = document.getElementById('latest-movie-grid');
    if (!latestGrid) return;
    let html = '';
    
    let displayMovies = window.realMoviesDatabase.slice(0, 10);
    
    displayMovies.forEach(movie => {
        html += `<div class="movie-card" onclick="openPlayer('${movie.title}')">
            <img src="${movie.img}" alt="${movie.title}">
            <div class="new-badge-tag">${movie.tag}</div>
            <div class="card-overlay"><h3>${movie.title}</h3><span style="color: #38ef7d;"><i class="fas fa-play-circle"></i> ${movie.desc}</span></div>
        </div>`;
    });
    
    let missingCount = 10 - displayMovies.length;
    for(let i = 0; i < missingCount; i++) {
        html += `<div class="movie-card card-updating" onclick="showNotification('info', 'Đang Chuẩn Bị', 'Đang cập nhật', 'Đã hiểu')">
            <img src="https://i.postimg.cc/BZTQdwdb/56575EA9-6C1E-453E-A0EE-628BF972D3E7.png">
            <div class="locked-icon-overlay" style="color: rgba(255,255,255,0.2);"><i class="fas fa-tools"></i></div>
            <div class="card-overlay"><h3 style="color:#888;">Khung Trống</h3><span style="color:#555;">Đang tải...</span></div>
        </div>`;
    }
    latestGrid.innerHTML = html;
};

window.renderMoviesByPage = function(page) {
    const pagedGrid = document.getElementById('paged-movie-grid');
    if (!pagedGrid) return;
    const startIndex = (page - 1) * 10; 
    const endIndex = Math.min(page * 10, 1000) - 1;
    let html = '';
    for (let i = startIndex; i <= endIndex; i++) {
        if (i < window.realMoviesDatabase.length) {
            let movie = window.realMoviesDatabase[i];
            html += `<div class="movie-card dynamic-page-card" onclick="openPlayer('${movie.title}')">
                <img src="${movie.img}"><div class="movie-index-badge" style="background: var(--primary-color);">#${i + 1}</div>
                <div class="card-overlay"><h3>${movie.title}</h3><span style="color: #38ef7d;"><i class="fas fa-play-circle"></i> Xem Tác Phẩm Này</span></div>
            </div>`;
        } else {
            html += `<div class="movie-card dynamic-page-card card-updating" onclick="showNotification('info', 'Thông Báo', 'Phim Số ${i + 1} đang chuẩn bị.', 'Đã hiểu')">
                <img src="https://i.postimg.cc/BZTQdwdb/56575EA9-6C1E-453E-A0EE-628BF972D3E7.png">
                <div class="movie-index-badge" style="background: rgba(11,11,12,0.8); color: #888;">#${i + 1}</div>
                <div class="locked-icon-overlay" style="color: rgba(255,255,255,0.2);"><i class="fas fa-tools"></i></div>
                <div class="card-overlay"><h3 style="color: #888;">Tác Phẩm Số ${i + 1}</h3><span style="color: #555;">Đang Cập Nhật...</span></div>
            </div>`;
        }
    }
    pagedGrid.innerHTML = html;
};

function renderPagination(page) {
    const TOTAL_PAGES = 100; // 1000 movies / 10 per page
    const paginationWrapper = document.getElementById('pagination-wrapper');
    if(!paginationWrapper) return;
    let html = '';
    const prevDisabled = page === 1 ? 'disabled' : '';
    html += `<div class="page-btn ${prevDisabled}" onclick="goToPage(${page - 1})"><i class="fas fa-chevron-left"></i></div>`;

    let pages = [];
    if (page <= 3) { pages = [1, 2, 3, 4, '...', TOTAL_PAGES]; } 
    else if (page >= TOTAL_PAGES - 2) { pages = [1, '...', TOTAL_PAGES - 3, TOTAL_PAGES - 2, TOTAL_PAGES - 1, TOTAL_PAGES]; } 
    else { pages = [1, '...', page - 1, page, page + 1, '...', TOTAL_PAGES]; }

    pages.forEach(p => {
        if (p === '...') { html += `<div class="page-dots">...</div>`; } 
        else {
            const activeClass = p === page ? 'active' : '';
            html += `<div class="page-btn ${activeClass}" onclick="goToPage(${p})">${p}</div>`;
        }
    });

    const nextDisabled = page === TOTAL_PAGES ? 'disabled' : '';
    html += `<div class="page-btn ${nextDisabled}" onclick="goToPage(${page + 1})"><i class="fas fa-chevron-right"></i></div>`;

    paginationWrapper.innerHTML = html;
}

window.goToPage = function(page) {
    if (page < 1 || page > 100) return;
    window.renderMoviesByPage(page);
    renderPagination(page);
    const gridTop = document.getElementById('paged-movie-grid').offsetTop - 100;
    window.scrollTo({ top: gridTop, behavior: 'smooth' });
};

// ================= TÌM KIẾM THÔNG MINH (FUZZY SEARCH) =================
function normalizeVietnamese(str) {
    return str.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd').replace(/Đ/g, 'D')
              .toLowerCase().trim();
}

window.handleSearchKeyPress = function(e) {
    if (e.key === 'Enter') {
        executeSearch();
    }
};

window.executeSearch = function() {
    let input = document.getElementById('main-search-input').value;
    if(!input.trim()) return;
    
    let normalizedInput = normalizeVietnamese(input);
    let foundIndex = window.realMoviesDatabase.findIndex(m => normalizeVietnamese(m.title).includes(normalizedInput));

    if (foundIndex !== -1) {
        let movie = window.realMoviesDatabase[foundIndex];
        openTab('tab-list');
        let targetPage = Math.floor(foundIndex / 10) + 1;
        goToPage(targetPage);
        
        setTimeout(() => {
            let cards = document.querySelectorAll('#paged-movie-grid .movie-card');
            let foundCard = null;
            cards.forEach(card => {
                let h3 = card.querySelector('h3');
                if(h3 && h3.innerText === movie.title) {
                    foundCard = card;
                }
            });
            
            if(foundCard) {
                foundCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                document.querySelectorAll('.movie-card').forEach(c => {
                    c.classList.remove('search-highlight');
                    let oldTooltip = c.querySelector('.search-tooltip');
                    if(oldTooltip) oldTooltip.remove();
                });

                foundCard.classList.add('search-highlight');
                let tooltip = document.createElement('div');
                tooltip.className = 'search-tooltip';
                tooltip.innerText = `Đã tìm thấy: ${movie.title}`;
                foundCard.appendChild(tooltip);

                showNotification('success', 'Tìm Kiếm Thành Công', `Bạn đã tìm đến bộ phim này: "${movie.title}". Xin hãy chọn vào khung phim đang sáng viền nhấp nháy để xem nhé!`, 'Đã hiểu');

                setTimeout(() => {
                    foundCard.classList.remove('search-highlight');
                    if(tooltip) tooltip.remove();
                }, 6000);
            }
        }, 300);

    } else {
        let allCards = document.querySelectorAll('#tab-home .movie-card');
        let foundCard = null;
        let foundTitle = "";

        for(let card of allCards) {
            let titleEl = card.querySelector('h3');
            if(!titleEl) continue;
            let title = titleEl.innerText;
            if (normalizeVietnamese(title).includes(normalizedInput)) {
                foundCard = card;
                foundTitle = title;
                break;
            }
        }

        if(foundCard) {
            openTab('tab-home');
            setTimeout(() => {
                foundCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                document.querySelectorAll('.movie-card').forEach(c => {
                    c.classList.remove('search-highlight');
                    let oldTooltip = c.querySelector('.search-tooltip');
                    if(oldTooltip) oldTooltip.remove();
                });
                foundCard.classList.add('search-highlight');
                let tooltip = document.createElement('div');
                tooltip.className = 'search-tooltip';
                tooltip.innerText = `Đã tìm thấy: ${foundTitle}`;
                foundCard.appendChild(tooltip);

                showNotification('success', 'Tìm Kiếm Thành Công', `Bạn đã tìm đến bộ phim này: "${foundTitle}". Xin hãy chọn vào khung phim đang sáng viền nhấp nháy để xem nhé!`, 'Đã hiểu');

                setTimeout(() => {
                    foundCard.classList.remove('search-highlight');
                    if(tooltip) tooltip.remove();
                }, 6000);
            }, 300);
        } else {
            showNotification('info', 'Thông Báo Tìm Kiếm', 'Cảm ơn sự tìm kiếm của bạn, chúng tôi đang cập nhật phim mà bạn yêu cầu một cách sớm nhất ạ.', 'Đã hiểu');
        }
    }
};

// ================= GIAO DIỆN & TIỆN ÍCH CHUNG =================
function showNotification(type, title, msg, btnText) {
    const overlay = document.getElementById('global-modal-overlay'), box = document.getElementById('global-modal-box'), icon = document.getElementById('modal-icon'), btn = document.getElementById('modal-action-btn');
    document.getElementById('modal-title').innerText = title; document.getElementById('modal-message').innerText = msg; btn.innerText = btnText;
    icon.style.animation = 'none'; icon.offsetHeight; 
    if(type === 'warning') { icon.className = 'fas fa-exclamation-triangle'; icon.style.color = '#ff4e00'; box.style.borderColor = '#ff4e00'; box.style.boxShadow = '0 10px 40px rgba(255, 78, 0, 0.3)'; btn.style.background = 'linear-gradient(45deg, #ff4e00, #ec9f05)'; icon.style.animation = 'shake 0.5s'; } 
    else if(type === 'error') { icon.className = 'fas fa-times-circle'; icon.style.color = '#e94560'; box.style.borderColor = '#e94560'; box.style.boxShadow = '0 10px 40px rgba(233, 69, 96, 0.3)'; btn.style.background = '#e94560'; icon.style.animation = 'shake 0.5s'; }
    else if(type === 'success') { icon.className = 'fas fa-check-circle'; icon.style.color = '#00e676'; box.style.borderColor = '#00e676'; box.style.boxShadow = '0 10px 40px rgba(0, 230, 118, 0.3)'; btn.style.background = 'linear-gradient(45deg, #00c6ff, #00e676)'; icon.style.animation = 'pulseGlow 1s infinite alternate'; } 
    else if(type === 'info') { icon.className = 'fas fa-info-circle'; icon.style.color = '#8e2de2'; box.style.borderColor = '#8e2de2'; box.style.boxShadow = '0 10px 40px rgba(142, 45, 226, 0.3)'; btn.style.background = 'linear-gradient(45deg, #8e2de2, #4a00e0)'; icon.style.animation = 'floatIcon 2s ease-in-out infinite'; }
    overlay.classList.add('show');
}
function closeNotification() { document.getElementById('global-modal-overlay').classList.remove('show'); }
document.getElementById('global-modal-overlay').addEventListener('click', function(e) { if(e.target === this) closeNotification(); });

const sidebar = document.getElementById('sidebar');
const menuLinks = document.querySelectorAll('.menu-link');
const tabContents = document.querySelectorAll('.tab-content');
document.getElementById('menu-btn').addEventListener('click', () => sidebar.classList.add('active'));
document.getElementById('close-btn').addEventListener('click', () => sidebar.classList.remove('active'));

window.openTab = function(targetId) {
    // Thêm hiệu ứng loading khi đổi tab
    window.executeWithLoading(() => {
        tabContents.forEach(tab => tab.classList.remove('active'));
        menuLinks.forEach(link => link.classList.remove('active-link'));
        document.getElementById(targetId).classList.add('active');
        menuLinks.forEach(link => { if(link.getAttribute('data-target') === targetId) link.classList.add('active-link'); });
        sidebar.classList.remove('active'); 
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Sửa thành gọi Event Banner thay vì Floating Ads
        if(typeof window.triggerEventBanner === 'function') window.triggerEventBanner();
    }, 500);
};
menuLinks.forEach(link => { link.addEventListener('click', function(e) { e.preventDefault(); openTab(this.getAttribute('data-target')); }); });

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) header.style.background = 'rgba(11, 11, 12, 0.95)'; else header.style.background = 'rgba(11, 11, 12, 0.8)';
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('is-scrolling-in'); } 
            else { entry.target.classList.remove('is-scrolling-in'); }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.6 });

    document.querySelectorAll('.movie-card').forEach(card => { scrollObserver.observe(card); });
});

// ================= LOGIC MODAL XEM PHIM & QUẢNG CÁO =================
window.adUnlockStep = 0; 
const MAX_AD_CLICKS = 3; 

window.showAdProgressToast = function(currentStep) {
    const toast = document.getElementById('ad-progress-toast');
    const fill = document.getElementById('ad-progress-fill');
    const countText = document.getElementById('ad-progress-count');
    const desc = document.getElementById('ad-toast-desc');
    const icon = document.querySelector('.ad-toast-icon i');
    const iconBox = document.querySelector('.ad-toast-icon');

    if (!toast) return;

    let percentage = (currentStep / MAX_AD_CLICKS) * 100;
    fill.style.width = percentage + '%';
    countText.innerText = `${currentStep}/${MAX_AD_CLICKS}`;

    if (currentStep < MAX_AD_CLICKS) {
        desc.innerText = `Đang chuyển hướng... Vui lòng quay lại và bấm vào phim thêm ${MAX_AD_CLICKS - currentStep} lần nữa!`;
        desc.style.color = "#f5c518";
        icon.className = "fas fa-hand-pointer";
        iconBox.style.background = "linear-gradient(135deg, #f5c518, #ff9800)";
        iconBox.style.boxShadow = "0 5px 15px rgba(245, 197, 24, 0.4)";
    } else {
        desc.innerText = "Nhiệm vụ hoàn tất! Hệ thống đang tải nội dung cho bạn...";
        desc.style.color = "#00e676";
        icon.className = "fas fa-check";
        iconBox.style.background = "linear-gradient(135deg, #00e676, #1de9b6)";
        iconBox.style.boxShadow = "0 5px 15px rgba(0, 230, 118, 0.4)";
    }

    toast.classList.add('show');
    clearTimeout(window.adToastTimer);
    window.adToastTimer = setTimeout(() => { closeAdToast(); }, currentStep === MAX_AD_CLICKS ? 3000 : 4000);
};

window.closeAdToast = function() {
    const toast = document.getElementById('ad-progress-toast');
    if(toast) toast.classList.remove('show');
};

window.currentPlayingAudio = "";
window.currentPlayingVideo = "https://example.com/link-video-vip-cua-ban"; 

window.openPlayer = function(movieName) {
    let imgSrc = 'https://i.postimg.cc/BZTQdwdb/56575EA9-6C1E-453E-A0EE-628BF972D3E7.png';
    try { if (window.event && window.event.currentTarget) { let imgEl = window.event.currentTarget.querySelector('img'); if (imgEl) imgSrc = imgEl.src; } } catch(e) {}

    let currentUser = JSON.parse(localStorage.getItem('cnp_current_user'));
    let isVip = currentUser && currentUser.isPremium;

    if (!isVip && window.adUnlockStep < MAX_AD_CLICKS) {
        window.adUnlockStep++;
        window.showAdProgressToast(window.adUnlockStep); 

        if(typeof randomRedirectLinks !== 'undefined' && randomRedirectLinks.length > 0) {
            let randomLink = randomRedirectLinks[Math.floor(Math.random() * randomRedirectLinks.length)];
            window.open(randomLink, '_blank');
        }
        if (window.adUnlockStep < MAX_AD_CLICKS) return; 
    }
    
    window.adUnlockStep = 0; 

    let audioLink = "";
    if (movieName.includes('Bố Và Mẹ Của Tôi Nhất')) audioLink = "https://videotourl.com/audio/1776432062804-f2b89215-56fc-4095-a140-b6d97124ac33.m4a";
    else if (movieName.includes('Tôi Là Phản Diện Mạnh Nhất')) audioLink = "https://files.catbox.moe/zucqh3.m4a";
    else if (movieName.includes('Bỏ Vợ Và Ra Đi')) audioLink = "https://videotourl.com/audio/1776262171928-8b43c1f4-f5e4-4408-8be4-2c9ea4363953.m4a";
    else if (movieName.includes('Người Yêu Ngày Cha Qua Đời')) audioLink = "https://videotourl.com/audio/1776244432440-7a75ed7b-fb88-4b87-a2d3-e02ed389e09d.m4a";
    else if (movieName.includes('Chặn Đầu Xe Ô Tô')) audioLink = "https://files.catbox.moe/7nchf3.m4a";
    else if (movieName.includes('Chân Sai Vặt Của Họ')) audioLink = "https://videotourl.com/audio/1776160704336-d2bd4ada-a7a2-4be0-8f73-2f841d44a479.m4a";
    else if (movieName.includes('Bạn Thân Người Yêu Cũ')) audioLink = "https://videotourl.com/audio/1776082105166-6c8a7cb4-ac2f-47ed-907c-6825925b9c04.m4a";
    else if (movieName.includes('Hoán Đổi Thân Thế Rồi')) audioLink = "https://videotourl.com/audio/1776064995813-b41fff28-b39a-4a40-a480-fd5ebe0ba0a0.m4a";
    else if (movieName.includes('Tôi Buổi Tối Hôm Đấy')) audioLink = "https://videotourl.com/audio/1776011213200-b173f4aa-dfa4-4031-aaa9-114dbef99e2b.m4a";
    else if (movieName.includes('Ra Đi Để Giữ Lại')) audioLink = "https://pub-af59ef8bd16249ba9a926f943a92e17e.r2.dev/audio/1775982846211-a3c28bef-c8e5-4e63-bd70-db4ed76f1acd.m4a";
    else if (movieName.includes('Sự Kiện Cho Đàn Ông')) audioLink = "https://files.catbox.moe/o68ce7.m4a";
    else if (movieName.includes('Tôi Kháng Lại Tất Cả')) audioLink = "https://files.catbox.moe/kdw1b7.m4a";
    else if (movieName.includes('Hoa Khôi Cố Gắng Tìm')) audioLink = "https://files.catbox.moe/xxi9wn.m4a";
    else if (movieName.includes('Người Cuồng Em Trai Nhất')) audioLink = "https://files.catbox.moe/3a8mwe.m4a";
    else if (movieName.includes('Chị Gái Của Tôi Mà')) audioLink = "https://files.catbox.moe/hlvkim.m4a";
    else if (movieName.includes('Vợ Tôi Lạnh Lùng Quá')) audioLink = "https://files.catbox.moe/q3ey2e.m4a";
    else if (movieName.includes('Ngày Bạn Gái Rời Đi')) audioLink = "https://files.catbox.moe/iu7pts.m4a";
    else if (movieName.includes('Người Bố Chức Bí Mật')) audioLink = "https://files.catbox.moe/ucs440.m4a";
    else if (movieName.includes('Các Chị Gái Của Tôi')) audioLink = "https://files.catbox.moe/4skfsa.m4a";
    else if (movieName.includes('Hình Mẫu Của Tôi Đấy')) audioLink = "https://files.catbox.moe/obh6yf.m4a";
    else if (movieName.includes('Gặp Gỡ Với Hoa Khôi')) audioLink = "https://files.catbox.moe/7y3ybi.m4a";
    else if (movieName.includes('Rời Xa Khỏi Vợ Mình')) audioLink = "https://files.catbox.moe/oznaow.m4a";
    else if (movieName.includes('Ngày Đầu Tôi Trở Về Nhà')) audioLink = "https://files.catbox.moe/0fdp29.m4a";
    else if (movieName.includes('Cô Gái Tìm Kiếm Tôi')) audioLink = "https://files.catbox.moe/h59z4p.m4a";
    else if (movieName.includes('Tôi Là Nỗi Sợ Hãi')) audioLink = "https://files.catbox.moe/785q30.m4a";
    else if (movieName.includes('Lời Dạy Bảo Của Mẹ')) audioLink = "https://files.catbox.moe/w9ixrh.m4a";
    else if (movieName.includes('Bạn Thân Của Chị Gái')) audioLink = "https://files.catbox.moe/ay2a8b.m4a";
    else if (movieName.includes('Tôi Trở Thành Tỉ Phú')) audioLink = "https://files.catbox.moe/h4o7kp.m4a";
    else if (movieName.includes('Ba Em Gái Của Tôi')) audioLink = "https://files.catbox.moe/es2ova.m4a";
    else if (movieName.includes('Bạn Gái Cũ Chứng Minh')) audioLink = "https://files.catbox.moe/xxdgmx.m4a";
    else if (movieName.includes('Tôi Cố Gắng Chịu Đựng')) audioLink = "https://files.catbox.moe/5hyn63.m4a";
    else if (movieName.includes('Bài Mới Của Bạn Gái')) audioLink = "https://files.catbox.moe/mkhu1m.m4a";
    else if (movieName.includes('Tiểu Thuyết Của Nam Chính')) audioLink = "https://files.catbox.moe/fu91o7.m4a";
    else if (movieName.includes('Vợ Tổng Tài Của Tôi')) audioLink = "https://files.catbox.moe/ytmvfv.m4a";
    else if (movieName.includes('Chấm Dứt Với Gia Đình')) audioLink = "https://files.catbox.moe/uz5ky7.m4a";
    else if (movieName.includes('Cố Gắng Rời Xa Em')) audioLink = "https://files.catbox.moe/saltg1.m4a";
    else if (movieName.includes('Chị Gái Nằm Với Tôi')) audioLink = "https://files.catbox.moe/nzldnc.m4a";
    else if (movieName.includes('Cha Mẹ Bắt Tôi Về')) audioLink = "https://files.catbox.moe/sgv8s9.m4a"; 
    else if (movieName.includes('Chị Gái Loại Bỏ Tôi')) audioLink = "https://files.catbox.moe/9qspdw.m4a";
    else if (movieName.includes('Tôi Đã Bị Thay Thế')) audioLink = "https://files.catbox.moe/0ibes6.m4a";
    else if (movieName.includes('So Tài Với Trà Xanh')) audioLink = "https://files.catbox.moe/mywlgy.m4a";
    else if (movieName.includes('Bắt Nạt Cô Thanh Mai')) audioLink = "https://files.catbox.moe/prwwla.m4a";
    else if (movieName.includes('Tôi Tránh Xa Thanh Mai')) audioLink = "https://files.catbox.moe/99ni7p.m4a";
    else if (movieName.includes('Đã Thật Lòng Với')) audioLink = "https://files.catbox.moe/c5da2s.m4a";
    else if (movieName.includes('Trợt Tỉnh Ra Sự Thật')) audioLink = "https://files.catbox.moe/69m56t.m4a";
    else if (movieName.includes('Lấy Hoa Khôi Lạnh Lùng')) audioLink = "https://files.catbox.moe/2v33j0.m4a";
    else if (movieName.includes('Nữ Thần Liễu Như Yên')) audioLink = "https://files.catbox.moe/gpnwng.m4a";
    else if (movieName.includes('Tôi Nằm Trên Ván Cược')) audioLink = "https://files.catbox.moe/r433x2.m4a";
    else if (movieName.includes('Tái Sinh Cùng Vợ Mình')) audioLink = "https://files.catbox.moe/csl5c0.m4a";
    else if (movieName.includes('Không Cùng Thế Giới Mà')) audioLink = "https://files.catbox.moe/66zbhz.m4a";
    else if (movieName.includes('Hoàn Hảo Với Em Gái')) audioLink = "https://files.catbox.moe/r1mu02.m4a";
    else if (movieName.includes('Hẹn Hò Với Nữ Minh Tinh')) audioLink = "https://files.catbox.moe/3hfxx5.m4a";
    else if (movieName.includes('Nấu Ăn Để Câu Cá')) audioLink = "https://files.catbox.moe/t56bql.m4a";
    else if (movieName.includes('Bảo Vệ Mẹ Mình Khỏi')) audioLink = "https://files.catbox.moe/dxfojg.mp3";
    else if (movieName.includes('Hôn Em Một Cái Thôi Mà')) audioLink = "https://files.catbox.moe/sv2cyf.m4a";
    else if (movieName.includes('Họ Cứ Nghĩ Tôi Theo Em')) audioLink = "https://files.catbox.moe/8jw1g0.mp3";
    else if (movieName.includes('Chuyển Tới Lớp Với Thanh Mai')) audioLink = "https://files.catbox.moe/cikmvt.m4a";
    
    window.currentPlayingAudio = audioLink;

    document.getElementById('link-movie-img').src = imgSrc;
    document.getElementById('link-movie-title').innerText = movieName;

    let btnWatchVideo = document.getElementById('btn-watch-video');
    if(isVip) {
        btnWatchVideo.className = 'action-btn btn-vip-unlocked';
        btnWatchVideo.innerHTML = '<i class="fas fa-play-circle"></i> Xem Video FULL VIP';
    } else {
        btnWatchVideo.className = 'action-btn btn-locked';
        btnWatchVideo.innerHTML = '<i class="fas fa-lock"></i> Xem Video (Khóa)';
    }

    document.getElementById('link-modal-overlay').classList.add('show');
    setTimeout(() => { addHistoryEntry('watch', movieName, 'Đã xem', 0, imgSrc); }, 50);
};

// ================= LOGIC TRÌNH PHÁT AUDIO CHUYÊN NGHIỆP =================
const webAudio = document.getElementById('main-web-audio');
const playBtn = document.getElementById('ap-play-btn');
const seekBar = document.getElementById('ap-seek-bar');
const currentTimeEl = document.getElementById('ap-current-time');
const totalTimeEl = document.getElementById('ap-total-time');

window.playCurrentAudio = function() {
    if(window.currentPlayingAudio && window.currentPlayingAudio.startsWith("http")) {
        window.executeWithLoading(() => {
            document.getElementById('ap-cover-img').src = document.getElementById('link-movie-img').src;
            document.getElementById('ap-movie-title').innerText = document.getElementById('link-movie-title').innerText;
            
            webAudio.src = window.currentPlayingAudio;
            webAudio.load();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
            playBtn.classList.remove('playing');
            seekBar.value = 0;
            currentTimeEl.innerText = "00:00";
            
            document.getElementById('audio-player-overlay').classList.add('show');
            setTimeout(() => { togglePlayPause(); }, 300);
        }, 600);
    } else {
        showNotification('info', 'Thông Báo', 'Hệ thống đang cập nhật nội dung cho tác phẩm này. Vui lòng quay lại sau!', 'Đã hiểu');
    }
};

window.closeAudioPlayer = function() {
    document.getElementById('audio-player-overlay').classList.remove('show');
    webAudio.pause(); 
};

function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";
    let m = Math.floor(seconds / 60);
    let s = Math.floor(seconds % 60);
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
}

window.togglePlayPause = function() {
    if (webAudio.paused) {
        webAudio.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        playBtn.classList.add('playing');
    } else {
        webAudio.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        playBtn.classList.remove('playing');
    }
};

window.skipAudio = function(seconds) {
    webAudio.currentTime += seconds;
};

let speeds = [1.0, 1.25, 1.5, 2.0];
let currentSpeedIdx = 0;
window.toggleAudioSpeed = function() {
    currentSpeedIdx = (currentSpeedIdx + 1) % speeds.length;
    let newSpeed = speeds[currentSpeedIdx];
    webAudio.playbackRate = newSpeed;
    document.getElementById('ap-speed-btn').innerText = newSpeed.toFixed(1) + "x";
};

window.toggleMute = function() {
    webAudio.muted = !webAudio.muted;
    const icon = document.querySelector('#ap-mute-btn i');
    if (webAudio.muted) {
        icon.className = 'fas fa-volume-mute';
        icon.style.color = '#e50914';
    } else {
        icon.className = 'fas fa-volume-up';
        icon.style.color = '#ccc';
    }
};

webAudio.addEventListener('timeupdate', () => {
    if (webAudio.duration) {
        let percentage = (webAudio.currentTime / webAudio.duration) * 100;
        seekBar.value = percentage;
        currentTimeEl.innerText = formatTime(webAudio.currentTime);
        seekBar.style.background = `linear-gradient(to right, #ff4e00 ${percentage}%, rgba(255,255,255,0.1) ${percentage}%)`;
    }
});

webAudio.addEventListener('loadedmetadata', () => {
    totalTimeEl.innerText = formatTime(webAudio.duration);
});

seekBar.addEventListener('input', () => {
    let seekTime = (seekBar.value / 100) * webAudio.duration;
    webAudio.currentTime = seekTime;
});

document.getElementById('audio-player-overlay').addEventListener('click', function(e) {
    if(e.target === this) window.closeAudioPlayer();
});

window.playCurrentVideo = function() {
    let currentUser = JSON.parse(localStorage.getItem('cnp_current_user'));
    let isVip = currentUser && currentUser.isPremium;
    
    if(isVip) {
        window.open(window.currentPlayingVideo, '_blank');
    } else {
        showNotification('warning', 'Chưa Có Quyền Truy Cập', 'Tính năng Xem Video chất lượng cao chỉ dành riêng cho hội viên Premium. Vui lòng nâng cấp để tiếp tục!', 'Tôi Đã Hiểu');
    }
};

window.closeLinkModal = function() { document.getElementById('link-modal-overlay').classList.remove('show'); };
document.getElementById('link-modal-overlay').addEventListener('click', function(e) { if(e.target === this) window.closeLinkModal(); });

// ================= AUTH, WALLET & PREMIUM =================
let currentWalletBalance = parseInt(localStorage.getItem('cnp_wallet_balance')) || 0;
let tempRegData = {};
let currentDepositType = ''; 
let pendingDepositAmount = 0;
window.validOtpCodes = ["AZ9T4GBN", "K3PQ8LMN", "J7FH2ECD", "R4TG6YUI", "E8W2AZXC", "9H8JKL32", "Q3VT4BNM", "7G4FH8JK", "C9D8EFGH", "V2B8N4ZA", "X5C9VBN8", "T7G3F2DE", "M4N8LKJH", "F2G5H8JK", "B9N4M2ZA", "P8L4K3GH", "H9G8F7ED", "N4V8B2XC", "G5T6Y7UI", "D8C9V4BN"];
window.wrongOtpAttempts = 0;
let currentPremPrice = 70000;
let currentPremMonths = 1;
let currentPremTier = 'bronze';

function updateBalanceUI() {
    let mainWallet = document.getElementById('main-wallet-balance');
    let userWallet = document.getElementById('current-user-balance');
    if (mainWallet) mainWallet.innerText = currentWalletBalance.toLocaleString('vi-VN');
    if (userWallet) userWallet.innerText = currentWalletBalance.toLocaleString('vi-VN') + ' VNĐ';
}

window.updateAndSaveBalance = function(newBalance) {
    currentWalletBalance = newBalance;
    localStorage.setItem('cnp_wallet_balance', currentWalletBalance);
    updateBalanceUI();
    
    let currentUser = JSON.parse(localStorage.getItem('cnp_current_user'));
    if (currentUser) {
        currentUser.walletBalance = newBalance;
        localStorage.setItem('cnp_current_user', JSON.stringify(currentUser));
        
        let usersDB = JSON.parse(localStorage.getItem('cnp_users_db')) || [];
        let userIndex = usersDB.findIndex(u => u.contact === currentUser.contact);
        if (userIndex !== -1) {
            usersDB[userIndex].walletBalance = newBalance;
            localStorage.setItem('cnp_users_db', JSON.stringify(usersDB));
        }
    }
};

function checkAuthStatus() {
    let currentUser = JSON.parse(localStorage.getItem('cnp_current_user'));
    if (currentUser) {
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('profile-section').style.display = 'block';
        document.getElementById('prof-username').innerText = currentUser.username;
        document.getElementById('prof-contact').value = currentUser.contact;
        document.getElementById('prof-ref').value = currentUser.refCode || 'Không có mã giới thiệu';
        updateAndSaveBalance(currentUser.walletBalance || 0);
    } else {
        document.getElementById('auth-section').style.display = 'block';
        document.getElementById('profile-section').style.display = 'none';
        switchAuthTab('login');
    }
}

window.switchAuthTab = function(tab) {
    document.getElementById('tab-btn-login').classList.remove('active');
    document.getElementById('tab-btn-register').classList.remove('active');
    document.getElementById('form-login').style.display = 'none';
    document.getElementById('form-register').style.display = 'none';
    document.getElementById('form-set-username').style.display = 'none';
    if (tab === 'login') { document.getElementById('tab-btn-login').classList.add('active'); document.getElementById('form-login').style.display = 'block'; } 
    else { document.getElementById('tab-btn-register').classList.add('active'); document.getElementById('form-register').style.display = 'block'; }
};

window.handleLogin = function() {
    let un = document.getElementById('login-username').value.trim();
    let pw = document.getElementById('login-password').value.trim();
    if (!un || !pw) { showNotification('warning', 'Thiếu Thông Tin', 'Vui lòng nhập Tên tài khoản và Mật khẩu!', 'Đã hiểu'); return; }
    let usersDB = JSON.parse(localStorage.getItem('cnp_users_db')) || [];
    let userFound = usersDB.find(u => (u.username === un || u.contact === un) && u.password === pw);
    if (userFound) {
        localStorage.setItem('cnp_current_user', JSON.stringify(userFound));
        showNotification('success', 'Thành Công', `Chào mừng ${userFound.username} quay trở lại!`, 'Vào trang chủ');
        document.getElementById('login-username').value = ''; document.getElementById('login-password').value = '';
        checkAuthStatus();
        syncPremiumUI();
    } else {
        showNotification('error', 'Lỗi Đăng Nhập', 'Tên tài khoản hoặc Mật khẩu không chính xác!', 'Thử lại');
    }
};

window.handleRegisterStep1 = function() {
    let contact = document.getElementById('reg-contact').value.trim();
    let pw = document.getElementById('reg-password').value.trim();
    let pwConfirm = document.getElementById('reg-confirm-password').value.trim();
    let refCode = document.getElementById('reg-refcode').value.trim();
    if (!contact || !pw || !pwConfirm) { showNotification('warning', 'Thiếu Thông Tin', 'SĐT/Gmail và Mật khẩu là bắt buộc!', 'Đã hiểu'); return; }
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex = /^(0|84)(3|5|7|8|9)[0-9]{8}$/; 
    if (!emailRegex.test(contact) && !phoneRegex.test(contact)) {
        document.getElementById('reg-contact').style.borderColor = "#e50914"; 
        setTimeout(() => document.getElementById('reg-contact').style.borderColor = "rgba(255,255,255,0.1)", 1500);
        showNotification('error', 'Sai Định Dạng', 'Vui lòng nhập chính xác Email hợp lệ hoặc Số điện thoại (10 số)!', 'Sửa lại'); return;
    }
    if (pw !== pwConfirm) { showNotification('error', 'Lỗi Mật Khẩu', 'Xác nhận mật khẩu không khớp!', 'Nhập lại'); return; }
    let usersDB = JSON.parse(localStorage.getItem('cnp_users_db')) || [];
    if (usersDB.some(u => u.contact === contact)) { showNotification('error', 'Tài Khoản Đã Tồn Tại', 'Số điện thoại/Email này đã được đăng ký!', 'Đăng nhập'); return; }
    
    tempRegData = { contact: contact, password: pw, refCode: refCode, walletBalance: 0 };
    document.getElementById('form-register').style.display = 'none';
    let step2 = document.getElementById('form-set-username');
    step2.style.display = 'block'; step2.classList.remove('success-pop'); void step2.offsetWidth; step2.classList.add('success-pop');
    document.getElementById('tab-btn-register').innerText = "BƯỚC 2: TẠO TÊN";
};

window.rollRandomUsername = function() {
    const prefixes = ["Hacker", "Vip", "Pro", "Master", "Dark", "Light", "Phim", "Anime", "God", "Super", "Ultra", "Neo", "Alpha", "Shadow", "Cyber"];
    const suffixes = ["Player", "Lord", "King", "Queen", "Knight", "Hunter", "Ghost", "Ninja", "Boy", "Girl", "Star", "Wolf", "Dragon", "Tiger", "Shark"];
    const randChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let newName = "";
    if(Math.random() > 0.3) { newName = prefixes[Math.floor(Math.random() * prefixes.length)] + suffixes[Math.floor(Math.random() * suffixes.length)] + (Math.floor(Math.random() * 999) + 1); } 
    else { newName = "CNP_"; for(let i=0; i<5; i++) newName += randChars.charAt(Math.floor(Math.random() * randChars.length)); }
    let inputField = document.getElementById('reg-username'); inputField.value = newName;
    inputField.style.transform = 'scale(1.1)'; inputField.style.borderColor = '#f5c518';
    setTimeout(() => { inputField.style.transform = 'scale(1)'; inputField.style.borderColor = '#00c6ff'; }, 250);
};

window.handleRegisterFinal = function() {
    let un = document.getElementById('reg-username').value.trim();
    if (!un) { showNotification('warning', 'Chưa Nhập Tên', 'Bạn phải tạo Tên Tài Khoản!', 'Đã hiểu'); return; }
    let usersDB = JSON.parse(localStorage.getItem('cnp_users_db')) || [];
    if (usersDB.some(u => u.username === un)) { showNotification('error', 'Tên Bị Trùng', 'Tên tài khoản này đã có người sử dụng!', 'Thử tên khác'); return; }
    
    tempRegData.username = un;
    usersDB.push(tempRegData);
    localStorage.setItem('cnp_users_db', JSON.stringify(usersDB));
    localStorage.setItem('cnp_current_user', JSON.stringify(tempRegData));
    
    showNotification('success', 'Đăng Ký Thành Công', `Tài khoản "${un}" đã được tạo.`, 'Vào trang chủ');
    document.getElementById('reg-contact').value = ''; document.getElementById('reg-password').value = ''; document.getElementById('reg-confirm-password').value = ''; document.getElementById('reg-refcode').value = ''; document.getElementById('reg-username').value = '';
    document.getElementById('tab-btn-register').innerText = "ĐĂNG KÝ";
    checkAuthStatus();
};

window.handleLogout = function() {
    let currentUser = JSON.parse(localStorage.getItem('cnp_current_user'));
    if (currentUser) {
        let usersDB = JSON.parse(localStorage.getItem('cnp_users_db')) || [];
        let userIndex = usersDB.findIndex(u => u.contact === currentUser.contact);
        if (userIndex !== -1) {
            usersDB[userIndex].walletBalance = window.currentWalletBalance || 0;
            usersDB[userIndex].isPremium = currentUser.isPremium;
            usersDB[userIndex].premiumTier = currentUser.premiumTier;
            localStorage.setItem('cnp_users_db', JSON.stringify(usersDB));
        }
    }
    localStorage.removeItem('cnp_current_user');
    syncPremiumUI();
    if(document.getElementById('main-wallet-balance')) document.getElementById('main-wallet-balance').innerText = '0';
    if(document.getElementById('current-user-balance')) document.getElementById('current-user-balance').innerText = '0 VNĐ';
    showNotification('success', 'Đăng Xuất', 'Bạn đã đăng xuất an toàn.', 'Đóng');
    checkAuthStatus();
};

// ================= DEPOSIT LOGIC =================
window.openDepositModal = function(type) {
    if (!localStorage.getItem('cnp_current_user')) { showNotification('warning', 'Yêu Cầu', 'Đăng nhập để nạp tiền.', 'Đăng Nhập'); openTab('tab-account'); return; }
    window.currentDepositType = type; 
    let depInput = document.getElementById('deposit-amount'); if(depInput) depInput.value = ''; 
    let newCode = 'CNP' + Math.floor(100000 + Math.random() * 900000); 
    document.getElementById('bank-content-text').innerText = newCode; document.getElementById('qr-content-text').innerText = newCode;
    document.querySelectorAll('.quick-btn').forEach(btn => btn.classList.remove('active'));
    let depTitle = document.getElementById('dep-title'); let areaManual = document.getElementById('area-manual'); let areaQR = document.getElementById('area-qr');
    if(type === 'manual') { depTitle.innerHTML = '<i class="fas fa-university"></i> Chuyển Khoản Thủ Công'; if(areaManual) areaManual.classList.remove('show'); if(areaQR) areaQR.classList.remove('show'); } 
    else if (type === 'qr') { depTitle.innerHTML = '<i class="fas fa-qrcode"></i> Quét Mã QR Tự Động'; if(areaManual) areaManual.classList.remove('show'); if(areaQR) areaQR.classList.remove('show'); }
    window.checkAmount(); 
    let depModal = document.getElementById('deposit-modal-overlay'); if(depModal) depModal.classList.add('show');
};

window.closeDepositModal = function() { document.getElementById('deposit-modal-overlay').classList.remove('show'); };
window.setAmount = function(amount) { let depInput = document.getElementById('deposit-amount'); if(depInput) depInput.value = amount; document.querySelectorAll('.quick-btn').forEach(btn => btn.classList.remove('active')); if(event && event.target) event.target.classList.add('active'); window.checkAmount(); };

window.checkAmount = function() {
    let val = parseInt(document.getElementById('deposit-amount').value) || 0;
    let btnConfirmDep = document.getElementById('btn-confirm-dep'); let warningBox = document.getElementById('deposit-warning-box'); let areaManual = document.getElementById('area-manual'); let areaQR = document.getElementById('area-qr');
    if(val >= 10000) { 
        if(btnConfirmDep) { btnConfirmDep.style.opacity = '1'; btnConfirmDep.style.pointerEvents = 'auto'; }
        if(warningBox) warningBox.classList.add('show');
        if(window.currentDepositType === 'manual') { if(areaManual) areaManual.classList.add('show'); if(areaQR) areaQR.classList.remove('show'); } else { if(areaQR) areaQR.classList.add('show'); if(areaManual) areaManual.classList.remove('show'); }
    } else { 
        if(btnConfirmDep) { btnConfirmDep.style.opacity = '0.5'; btnConfirmDep.style.pointerEvents = 'none'; }
        if(areaManual) areaManual.classList.remove('show'); if(areaQR) areaQR.classList.remove('show'); if(warningBox) warningBox.classList.remove('show');
    }
};

window.confirmDeposit = function() {
    window.pendingDepositAmount = parseInt(document.getElementById('deposit-amount').value) || 0; 
    window.closeDepositModal(); 
    let otpInput = document.getElementById('otp-code-input'); if(otpInput) { otpInput.value = ''; otpInput.classList.remove('input-error'); }
    let otpModal = document.getElementById('otp-modal-overlay'); if(otpModal) otpModal.classList.add('show');
};

window.closeOtpModal = function() { let otpModal = document.getElementById('otp-modal-overlay'); if(otpModal) otpModal.classList.remove('show'); };
document.getElementById('otp-modal-overlay').addEventListener('click', function(e) { if(e.target === this) window.closeOtpModal(); });

window.verifyAndCompleteDeposit = function() {
    let inputField = document.getElementById('otp-code-input'); if(!inputField) return;
    let otpCode = inputField.value.trim().toUpperCase(); 
    if (otpCode === "") { inputField.classList.add('input-error'); showNotification('warning', 'Trống', 'Bạn chưa nhập mã!', 'Đã hiểu'); return; }

    let usedOtpCodes = JSON.parse(localStorage.getItem('cnp_used_otps')) || [];
    if (window.validOtpCodes.includes(otpCode)) {
        if (usedOtpCodes.includes(otpCode)) { inputField.classList.add('input-error'); showNotification('error', 'Hết Hạn', 'Mã đã được dùng!', 'Đã hiểu'); return; }
        window.wrongOtpAttempts = 0; usedOtpCodes.push(otpCode); localStorage.setItem('cnp_used_otps', JSON.stringify(usedOtpCodes));
        window.closeOtpModal();
        let currentUser = JSON.parse(localStorage.getItem('cnp_current_user'));
        let currentBalance = currentUser ? (currentUser.walletBalance || 0) : 0;
        let newBalance = currentBalance + (window.pendingDepositAmount || 0);
        window.updateAndSaveBalance(newBalance);
        let depMethod = window.currentDepositType === 'qr' ? 'Quét Mã QR' : 'Chuyển Khoản';
        addHistoryEntry('deposit', 'Nạp Tiền Qua ' + depMethod, window.pendingDepositAmount || 0, newBalance);
        
        let successModal = document.getElementById('deposit-success-overlay'); let amountText = document.getElementById('success-amount-text');
        if(amountText) amountText.innerText = `+ ${(window.pendingDepositAmount || 0).toLocaleString('vi-VN')} VNĐ đã được cộng vào ví`;
        if(successModal) successModal.classList.add('show');
        inputField.value = ''; 
    } else {
        window.wrongOtpAttempts++; inputField.classList.add('input-error'); 
        if (window.wrongOtpAttempts >= 3) { showNotification('error', 'CẢNH BÁO', 'Nhập sai quá nhiều lần!', 'Tôi Đã Hiểu'); } 
        else { showNotification('error', 'Mã Không Hợp Lệ', `Mã sai. (Lần: ${window.wrongOtpAttempts}/3)`, 'Thử Lại'); }
    }
};
window.closeSuccessCelebration = function() { let successModal = document.getElementById('deposit-success-overlay'); if(successModal) successModal.classList.remove('show'); };
window.copyText = function(id) { let text = document.getElementById(id).innerText; navigator.clipboard.writeText(text).then(() => showNotification('success', 'Đã Copy', text, 'Đóng')); };

// ================= PREMIUM & PAYMENT =================
window.openPremiumModal = function() {
    if (!localStorage.getItem('cnp_current_user')) { showNotification('warning', 'Yêu Cầu', 'Đăng nhập để nâng cấp Premium!', 'Đăng Nhập'); openTab('tab-account'); return; }
    document.getElementById('premium-modal').classList.add('show');
};
window.closePremiumModal = function() { document.getElementById('premium-modal').classList.remove('show'); };

window.selectPrem = function(el, m, p, tier) {
    document.querySelectorAll('.prem-card').forEach(c => c.classList.remove('active')); el.classList.add('active');
    currentPremPrice = p; currentPremMonths = m; currentPremTier = tier;
    document.getElementById('prem-sum').innerHTML = `Thanh toán: <span style="color: #f5c518;">${p.toLocaleString('vi-VN')}đ</span>`;
};

window.confirmPurchasePremium = function() {
    let currentUser = JSON.parse(localStorage.getItem('cnp_current_user')); let balance = currentUser.walletBalance || 0;
    if (balance < currentPremPrice) { showNotification('error', 'Thất Bại', 'Số dư ví không đủ. Vui lòng nạp thêm!', 'Nạp Tiền'); closePremiumModal(); openTab('tab-wallet'); return; }
    let newBalance = balance - currentPremPrice; currentUser.walletBalance = newBalance; currentUser.isPremium = true; currentUser.premiumTier = currentPremTier;
    window.updateAndSaveBalance(newBalance); localStorage.setItem('cnp_current_user', JSON.stringify(currentUser));
    addHistoryEntry('spend', 'Mua Gói Premium ' + currentPremMonths + ' Tháng', currentPremPrice, newBalance);
    showNotification('success', 'Tuyệt Vời', `Bạn đã nâng cấp Premium thành công!`, 'Trải nghiệm'); closePremiumModal(); syncPremiumUI();
};

window.syncPremiumUI = function() {
    let user = JSON.parse(localStorage.getItem('cnp_current_user')); let crown = document.getElementById('header-crown-status'); let heroBtn = document.getElementById('main-premium-btn');
    if (user && user.isPremium) {
        if(crown) { crown.style.display = 'inline-block'; crown.className = 'fas fa-crown crown-' + user.premiumTier; }
        if(heroBtn) { heroBtn.classList.add('is-active'); heroBtn.innerHTML = '<i class="fas fa-check-circle"></i> Đã Kích Hoạt Premium'; }
    } else {
        if(crown) crown.style.display = 'none';
        if(heroBtn) { heroBtn.classList.remove('is-active'); heroBtn.innerHTML = '<i class="fas fa-crown"></i> Nâng Cấp Premium'; }
    }
};

let currentBasePrice = 0; let finalPrice = 0;
window.openPaymentModal = function(pkg, price) { 
    if (!localStorage.getItem('cnp_current_user')) { showNotification('warning', 'Yêu Cầu Đăng Nhập', 'Vui lòng đăng nhập để mua gói.', 'Đăng Nhập'); openTab('tab-account'); return; }
    currentBasePrice = price; document.getElementById('pay-package-name').innerText = pkg; document.querySelector('.dur-card').click(); document.getElementById('payment-modal-overlay').classList.add('show'); 
};
window.closePaymentModal = function() { document.getElementById('payment-modal-overlay').classList.remove('show'); };
window.selectDuration = function(el, m, disc) { document.querySelectorAll('.dur-card').forEach(c => c.classList.remove('active')); el.classList.add('active'); finalPrice = currentBasePrice * m * ((100-disc)/100); document.getElementById('pay-total-price').innerText = finalPrice.toLocaleString('vi-VN') + 'đ'; };

window.processPayment = function() {
    closePaymentModal();
    setTimeout(() => {
        if(currentWalletBalance >= finalPrice) {
            let pkgName = document.getElementById('pay-package-name').innerText;
            addHistoryEntry('spend', pkgName, finalPrice, currentWalletBalance - finalPrice);
            updateAndSaveBalance(currentWalletBalance - finalPrice);
            showNotification('success', 'Thành Công', 'Đã mua gói Server thành công.', 'Xem ngay');
        } else { showNotification('error', 'Thất Bại', 'Số dư không đủ!', 'Đã hiểu'); }
    }, 300);
};

// ================= HISTORY LOGIC =================
window.addHistoryEntry = function(type, title, amountOrExtra, balanceAfter = 0, imgSrc = '') {
    let history = JSON.parse(localStorage.getItem('cnp_user_history')) || [];
    if (type === 'watch') history = history.filter(item => item.title !== title);
    const newEntry = { id: Date.now(), type: type, title: title, time: (new Date()).toLocaleTimeString('vi-VN', {hour: '2-digit', minute:'2-digit'}) + ' - ' + (new Date()).toLocaleDateString('vi-VN'), amountOrExtra: amountOrExtra, balanceAfter: balanceAfter, imgSrc: imgSrc };
    history.unshift(newEntry); if (history.length > 50) history.pop(); localStorage.setItem('cnp_user_history', JSON.stringify(history));
    if(typeof renderHistoryUI === 'function') renderHistoryUI();
};

window.renderHistoryUI = function() {
    const container = document.getElementById('main-history-list'); if (!container) return;
    let history = JSON.parse(localStorage.getItem('cnp_user_history')) || [];
    if (history.length === 0) { container.innerHTML = '<p style="text-align:center; color:#888; padding: 30px; font-style: italic;">Bạn chưa có hoạt động nào gần đây.</p>'; return; }
    let html = '';
    history.forEach((item, index) => {
        let delay = (index * 0.05) > 1 ? 0 : (index * 0.05);
        if (item.type === 'watch') {
            let coverImg = item.imgSrc ? item.imgSrc : 'https://i.postimg.cc/BZTQdwdb/56575EA9-6C1E-453E-A0EE-628BF972D3E7.png';
            html += `<div class="history-item type-watch" style="animation-delay: ${delay}s;" onclick="openPlayer('${item.title}')">
                <div class="hist-left"><div class="hist-img-preview"><img src="${coverImg}" alt="${item.title}"></div><div class="hist-details"><span class="hist-title">${item.title}</span><span class="hist-time"><i class="far fa-clock"></i> ${item.time}</span></div></div>
                <div class="hist-right"><div class="hist-val-watch" style="color: var(--primary-color); border-color: var(--primary-color); font-weight: bold; background: rgba(229,9,20,0.1);"><i class="fas fa-play-circle"></i> Xem Lại</div></div>
            </div>`;
        } else {
            let iconClass = item.type === 'deposit' ? 'icon-deposit' : 'icon-spend'; let iconFas = item.type === 'deposit' ? 'fa-money-check-alt' : 'fa-shopping-cart'; let valClass = item.type === 'deposit' ? 'hist-val-plus' : 'hist-val-minus'; let prefix = item.type === 'deposit' ? '+' : '-';
            html += `<div class="history-item type-transaction" style="animation-delay: ${delay}s;">
                <div class="hist-left"><div class="hist-icon ${iconClass}"><i class="fas ${iconFas}"></i></div><div class="hist-details"><span class="hist-title">${item.title}</span><span class="hist-time"><i class="far fa-clock"></i> ${item.time}</span></div></div>
                <div class="hist-right"><div class="${valClass}">${prefix} ${item.amountOrExtra.toLocaleString('vi-VN')}đ</div><div class="hist-balance-after">Số dư: ${item.balanceAfter.toLocaleString('vi-VN')}đ</div></div>
            </div>`;
        }
    });
    container.innerHTML = html;
};

window.filterHistory = function(type, btnElement) {
    document.querySelectorAll('.hist-tab-btn').forEach(btn => btn.classList.remove('active')); btnElement.classList.add('active');
    document.querySelectorAll('.history-item').forEach(item => {
        if (type === 'all') item.classList.remove('hide'); else if (type === 'watch') item.classList.contains('type-watch') ? item.classList.remove('hide') : item.classList.add('hide'); else if (type === 'transaction') item.classList.contains('type-transaction') ? item.classList.remove('hide') : item.classList.add('hide');
    });
};

// ================= APP INSTALL & ADS (ĐÃ GỠ BỎ QUẢNG CÁO CHỒNG CHÉO) =================
window.closeInstallBanner = function() { const banner = document.getElementById('app-install-banner'); if (banner) { banner.style.animation = 'slideUpBanner 0.5s reverse forwards'; setTimeout(() => { banner.style.display = 'none'; }, 500); } };
window.openInstallModal = function() { document.getElementById('app-install-modal').classList.add('show'); };
window.closeInstallModal = function() { document.getElementById('app-install-modal').classList.remove('show'); };
window.switchInstallTab = function(os) { document.querySelectorAll('.os-tab').forEach(btn => btn.classList.remove('active')); document.querySelectorAll('.install-tab-content').forEach(content => content.classList.remove('active')); if (os === 'ios') { document.querySelectorAll('.os-tab')[0].classList.add('active'); document.getElementById('install-tab-ios').classList.add('active'); } else { document.querySelectorAll('.os-tab')[1].classList.add('active'); document.getElementById('install-tab-android').classList.add('active'); } };
document.getElementById('app-install-modal').addEventListener('click', function(e) { if (e.target === this) window.closeInstallModal(); });

window.closeTopRightEvent = function(event) { event.preventDefault(); event.stopPropagation(); const banner = document.getElementById('top-right-event-banner'); if(banner) { banner.style.animation = 'slideOutRight 0.5s forwards'; setTimeout(() => { banner.classList.remove('show-event'); banner.style.animation = ''; }, 500); } };
window.goToWalletAndClose = function(event) { event.preventDefault(); openTab('tab-wallet'); window.closeTopRightEvent(event); };
window.triggerEventBanner = function() { 
    const banner = document.getElementById('top-right-event-banner'); 
    if(banner) { banner.classList.remove('show-event'); void banner.offsetWidth; banner.classList.add('show-event'); } 
};

window.updateFileName = function(input) { const label = document.getElementById('support-image-label'); if (input.files && input.files.length > 0) { let fileName = input.files[0].name; if (fileName.length > 25) fileName = fileName.substring(0, 22) + '...'; label.innerHTML = `<i class="fas fa-image"></i> Đã chọn: ${fileName}`; label.classList.add('has-file'); } else { label.innerHTML = `<i class="fas fa-cloud-upload-alt"></i> Tải lên ảnh minh họa lỗi (Nếu có)`; label.classList.remove('has-file'); } };
window.submitSupportTicket = function() { let name = document.getElementById('support-name').value; let email = document.getElementById('support-email').value; let content = document.getElementById('support-content').value; if(!name || !email || !content) { showNotification('warning', 'Thiếu Thông Tin', 'Vui lòng điền đầy đủ Họ tên, Email và Nội dung cần hỗ trợ!', 'Đã hiểu'); return; } showNotification('success', 'Gửi Thành Công', 'Tin nhắn kèm ảnh minh họa của bạn đã được gửi. Đội ngũ hỗ trợ sẽ phản hồi sớm nhất!', 'Đóng'); document.getElementById('support-name').value = ''; document.getElementById('support-email').value = ''; document.getElementById('support-content').value = ''; document.getElementById('support-image').value = ''; window.updateFileName(document.getElementById('support-image')); };

// ================= KHỞI CHẠY TẤT CẢ KHI LOAD WEB XONG =================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Hiện thông báo Top-Down mượt mà
    setTimeout(() => {
        let topToast = document.getElementById('top-welcome-toast');
        if(topToast) {
            topToast.classList.add('show');
            setTimeout(() => {
                topToast.classList.remove('show');
            }, 4000);
        }
    }, 1000);

    // 2. Chạy các tiến trình ngầm định
    checkAuthStatus();
    setTimeout(() => { if(typeof renderLatestMovies === 'function') renderLatestMovies(); }, 200);
    setTimeout(() => { window.renderMoviesByPage(1); renderPagination(1); }, 300);
    setTimeout(() => { renderHistoryUI(); syncPremiumUI(); }, 500);
    
    // Gọi Banner Sự kiện nạp thay vì gọi quảng cáo
    setTimeout(window.triggerEventBanner, 800); 
    
    setTimeout(() => {
        let currentUser = JSON.parse(localStorage.getItem('cnp_current_user'));
        if (currentUser) { window.updateAndSaveBalance(currentUser.walletBalance || 0); }
    }, 200);
});

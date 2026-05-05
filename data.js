const kpiHighlights = [
    { label: "GMV Mục Tiêu 3 Tháng", value: "2.1 TỶ VNĐ", color: "navy" },
    { label: "Tỷ Trọng Kanehide", value: "65% GMV", color: "blue" },
    { label: "Conversion Rate", value: "> 3.5%", color: "green" },
    { label: "AOV Trung Bình", value: "> 1,500,000đ", color: "amber" }
];

const masterStrategy = [
    {
        id: "1",
        category: "Định Vị Thương Hiệu (Brand Positioning)",
        problem: "Shopee là kênh quen mua hàng rẻ & ngẫu hứng. Khách hàng mục tiêu cần thời gian cân nhắc lâu (high-involvement purchase) với sản phẩm 2–7 triệu.",
        solution: "Setup gian hàng theo chuẩn \"Medical/Clinic\": hiển thị giấy tờ nhập khẩu, tem phụ, giấy ủy quyền ngay ảnh đầu tiên. Không tham gia flash sale giảm sâu.",
        kpi: "CR tự nhiên > 3.5%\nBounce rate listing < 40%\nRating trung bình ≥ 4.8⭐"
    },
    {
        id: "2",
        category: "Cạnh Tranh Giá (Price Competition)",
        problem: "Bị vây bởi hàng xách tay phá giá (rẻ hơn 20–30%) và hàng mập mờ nguồn gốc. Không thể đua giá mà không phá vỡ định vị cao cấp.",
        solution: "Chiến lược Bundle: không giảm giá trực tiếp — tặng kèm sản phẩm bổ trợ (Vitamin, Collagen). Tạo combo value-pack độc quyền chỉ có trên Shopee chính hãng.",
        kpi: "AOV > 1,500,000đ\nGiá trị cảm nhận cao hơn đối thủ xách tay\nKhông giảm giá nền > 5%"
    },
    {
        id: "3",
        category: "Niềm Tin & Social Proof (Trust Building)",
        problem: "Khách lo sợ hàng giả, hàng kém chất lượng. Sản phẩm mang tính y tế đặc trị (ung thư, phục hồi) — quyết định mua phụ thuộc nhiều vào sự tin tưởng.",
        solution: "CSKH theo mô hình \"Dược sĩ tư vấn 1-1\": không hối thúc chốt đơn. Livestream chuyên gia 2 buổi/tuần để giải đáp thắc mắc real-time. KOC người thật dùng sản phẩm thật.",
        kpi: "Review 5⭐ kèm video ≥ 30% tổng đánh giá mới\nTỷ lệ quay lại (repeat purchase) > 20%"
    },
    {
        id: "4",
        category: "Traffic & Độ Phủ (Awareness & Traffic)",
        problem: "Shopee thiếu traffic tự nhiên cho tệp khách cao cấp, lớn tuổi (có tiền, ít dùng app). Cần mượn kênh ngoài để kéo về.",
        solution: "CPAS (Facebook/TikTok Ads → Shopee): nhắm tệp 40–60 tuổi, có con cái quan tâm sức khỏe. KOC Affiliate gắn link Shopee trên video YouTube/TikTok.",
        kpi: "External traffic tăng 30% so với baseline\nCPAS ROAS ≥ 1.5–2.0x\nKOC Affiliate GMV đóng góp ≥ 15% tổng"
    },
    {
        id: "5",
        category: "Tăng Tốc Chuyển Đổi (Conversion Acceleration)",
        problem: "Khách xem nhiều nhưng không mua vì thiếu cú đẩy cuối. Voucher thường xuyên làm khách chờ sale thay vì mua ngay.",
        solution: "Tung Voucher \"Sập Sàn\" CHỈ TRONG phiên Livestream → tạo FOMO có thời hạn. Retargeting Shopee Ads bám đuổi khách đã xem nhưng chưa mua.",
        kpi: "Live session conversion ≥ 5%\nRetargeting ROAS > 5.0x\nAdd-to-cart rate > 8%"
    },
    {
        id: "6",
        category: "Tổng Mục Tiêu (Overall Target – 3 Tháng)",
        problem: "—",
        solution: "Thực thi đồng bộ 5 nhóm giải pháp trên theo timeline 12 tuần.",
        kpi: "✅ GMV = 2.1 Tỷ VNĐ\n✅ Kanehide = 65% GMV\n✅ ROAS tổng > 4.0x\n✅ CR > 3.5% | AOV > 1.5M"
    }
];

const actionPlanInApp = [
    { id: "1", item: "🔐 Trust Building Listing & CSKH", todo: "Gắn tag Shopee Mall/Auth. Đẩy ảnh giấy tờ nhập khẩu + tem phụ + giấy ủy quyền lên slot ảnh đầu tiên.", detail: "• Thiết kế bộ ảnh listing 9 ảnh chuẩn\n• Viết lại mô tả SP theo format\n• Bật Shopee Guarantee", pic: "Content Team", timeline: "Tuần 1–2", priority: "Cao", status: "To Do" },
    { id: "2", item: "💬 CSKH Dược Sĩ (1-1 Consulting)", todo: "Xây kịch bản chat theo từng nhóm bệnh lý. Đào tạo CSKH dùng danh xưng 'Dược sĩ tư vấn'.", detail: "• Phân loại 5 nhóm hội thoại\n• Setup Auto-reply\n• Kịch bản follow-up sau 24h", pic: "CSKH Lead", timeline: "Tuần 1–3", priority: "Cao", status: "To Do" },
    { id: "3", item: "📦 Bundle & Pricing Strategy", todo: "Tạo combo bundle Kanehide + Vitamin/Collagen. Không giảm giá nền. Tạo SKU bundle độc quyền.", detail: "• Bundle 1: Kanehide Nano + Vitamin C\n• Bundle 2: Kanehide 3 tháng dùng\n• Flash deal TRONG Live", pic: "Brand Manager", timeline: "Tuần 2–3", priority: "Trung bình", status: "To Do" },
    { id: "4", item: "📺 Mega Livestream (2 buổi/tuần)", todo: "Live 2 buổi/tuần. Khách mời: Dược sĩ hoặc chuyên gia. Tung voucher sập sàn TRONG live.", detail: "• Khung giờ: T3 20:00 + T7 15:00\n• Cấu trúc live\n• KPI: ≥ 500 viewers/buổi", pic: "Live Host", timeline: "Tuần 2–12", priority: "Cao", status: "To Do" },
    { id: "5", item: "🎯 Shopee Search Ads", todo: "Bid từ khóa dài ngách: 'fucoidan nhật bản'. Tối ưu ảnh bìa tăng CTR.", detail: "• Budget ngày: 300k–500k/ngày\n• Từ khóa ưu tiên\n• Mục tiêu: CTR > 2.5%, ROAS > 5.0x", pic: "Perf. Marketing", timeline: "Tuần 2–12", priority: "Trung bình", status: "To Do" },
    { id: "6", item: "🔄 Shopee Discovery Retargeting", todo: "Chạy Shopee Discovery Ads bám đuổi khách đã xem sản phẩm nhưng chưa mua.", detail: "• Nhắm 3 tệp: Đã xem, Đã ATC, Đã chat\n• Creative: Video testimonial\n• Giới hạn frequency cap", pic: "Perf. Marketing", timeline: "Tuần 3–12", priority: "Trung bình", status: "To Do" },
    { id: "7", item: "⭐ Review & Rating Program", todo: "Chủ động kích thích đánh giá 5⭐ kèm nội dung. Phản hồi tất cả review.", detail: "• Gửi tin nhắn follow-up sau giao hàng\n• Tặng voucher 50k\n• Mục tiêu: ≥ 50 review/tháng", pic: "CSKH Lead", timeline: "Tuần 1–12", priority: "Trung bình", status: "To Do" }
];

const actionPlanOffApp = [
    { id: "1", item: "👥 KOC Affiliate", todo: "Thuê 5–10 KOC lớn tuổi quay clip dùng SP thật. Gắn link Affiliate.", detail: "• Tiêu chí chọn KOC\n• Format video: Unboxing + cảm nhận\n• Hoa hồng: 10–15%", pic: "Affiliate Manager", kpi: "GMV KOC ≥ 15%\nROAS ≥ 3.0x", budget: "20–25%", status: "To Do" },
    { id: "2", item: "📣 CPAS Facebook Ads", todo: "Chạy quảng cáo video chuyên gia y tế trên Facebook. Click dẫn thẳng vào giỏ hàng.", detail: "• Tệp nhắm mục tiêu: Tuổi 35–60\n• Creative: Video 60–90s\n• Budget test: 100k/ngày", pic: "Paid Media Team", kpi: "ROAS ≥ 1.5–2.0x\nCTR ≥ 0.8%", budget: "30–35%", status: "To Do" },
    { id: "3", item: "🎵 CPAS TikTok Ads", todo: "Chạy TikTok TopView/In-Feed Ads video chuyên gia. Nhắm con cái mua cho bố mẹ.", detail: "• Tệp: Con cái 25–40t\n• Creative: Hook đầu 3s\n• Dùng Spark Ads", pic: "Paid Media Team", kpi: "ROAS ≥ 1.2–1.5x\nCTR ≥ 1.5%", budget: "20–25%", status: "To Do" },
    { id: "4", item: "📧 Zalo OA", todo: "Xây dựng kênh Zalo OA để nuôi dưỡng tệp khách hàng tiềm năng.", detail: "• Gửi tin nhắn broadcast\n• Tặng ebook PDF\n• Sequence 7 ngày", pic: "CRM", kpi: "Followers ≥ 500\nOpen rate ≥ 35%", budget: "5–10%", status: "To Do" }
];

const budgetData = [
    { item: "🎯 Shopee Ads", m1: 30, m2: 35, m3: 40 },
    { item: "📣 CPAS Facebook Ads", m1: 25, m2: 30, m3: 35 },
    { item: "🎵 CPAS TikTok Ads", m1: 15, m2: 20, m3: 25 },
    { item: "👥 KOC Affiliate", m1: 20, m2: 25, m3: 30 },
    { item: "📺 Livestream Production", m1: 10, m2: 10, m3: 10 },
    { item: "🎨 Content & Creative", m1: 8, m2: 8, m3: 8 },
    { item: "📧 Zalo OA & CRM", m1: 3, m2: 3, m3: 3 },
    { item: "⭐ Review Program", m1: 5, m2: 5, m3: 5 },
    { item: "🔧 Listing Optimization", m1: 5, m2: 0, m3: 0 }
];

const kpiTrackerData = [
    { kpi: "💰 GMV Tổng (VNĐ)", target: "2,100,000,000" },
    { kpi: "🏷️ GMV Kanehide (VNĐ)", target: "1,365,000,000 (65%)" },
    { kpi: "📦 Tổng Đơn Hàng", target: "≥ 1,400 đơn" },
    { kpi: "💵 AOV", target: "> 1,500,000đ" },
    { kpi: "🔄 CR – Tỷ lệ chuyển đổi", target: "> 3.5%" },
    { kpi: "🛒 Add-to-Cart Rate", target: "> 8%" },
    { kpi: "⭐ Rating Trung Bình Shop", target: "≥ 4.8 ⭐" },
    { kpi: "🎯 Shopee Ads ROAS", target: "> 5.0x" },
    { kpi: "📣 CPAS Facebook ROAS", target: "1.5–2.0x" },
    { kpi: "💰 ROAS Tổng Thể", target: "> 4.0x" }
];

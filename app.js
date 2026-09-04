/**
 * SWISS 7N8D MOBILE TIMELINE APP
 * Comprehensive data structure matching the PDF schedule
 * Real Swiss Photography, Dual Real-Time Clock (Swiss & Korea), Auto-Scroll to 1st Item, Exact Webcam Links
 * Firebase SDK v10 & Firestore Real-Time Integration
 */

// Firebase Configuration provided by User
const firebaseConfig = {
  apiKey: "AIzaSyD7Twge52xuhufQb_eQQ1phbPy_tBjCM1U",
  authDomain: "swiss260905.firebaseapp.com",
  projectId: "swiss260905",
  storageBucket: "swiss260905.firebasestorage.app",
  messagingSenderId: "195579344123",
  appId: "1:195579344123:web:f40457adb6e5873875ec5e",
  measurementId: "G-GPQNJGVFL9"
};

// Initialize Firebase & Firestore
let db = null;
try {
  if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    console.log("Firebase App & Firestore initialized successfully");
  } else {
    console.warn("Firebase SDK script not loaded yet; using offline fallback.");
  }
} catch (e) {
  console.warn("Firebase initialization warning:", e);
}

// Schedule Data: 100% Faithful to the PDF Itinerary (Day 1 ~ Day 8) with Real Swiss Photos
const DEFAULT_ITINERARY_DATA = [
  {
    day: 1,
    dateStr: "9/5 (토)",
    title: "입국 및 그린델발트 이동",
    location: "취리히 공항 ➔ 그린델발트",
    // Day 1 실사: 그린델발트 계곡과 아이거 북벽 실사화
    bgImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
    summary: "스위스 취리히 공항에 도착하여 렌터카를 인수하고 식재료를 장본 뒤, 알프스의 안식처 그린델발트 숙소로 이동합니다.",
    tags: ["취리히 공항", "렌터카 픽업", "마트 장보기", "그린델발트 숙소"],
    items: [
      {
        id: "d1-1",
        time: "17:30",
        category: "move",
        categoryName: "입국/도착",
        title: "취리히 공항 도착 및 입국 수속",
        desc: "스위스 취리히 공항(ZRH)에 도착하여 입국 심사 완료 후 위탁 수하물을 수취합니다.",
        photo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
        tip: null,
        address: null,
        mapUrl: null
      },
      {
        id: "d1-2",
        time: "18:30",
        category: "move",
        categoryName: "렌터카",
        title: "렌터카 픽업 및 수하물 적재",
        desc: "공항 렌터카 센터(Airport Center)에서 예약 차량을 인수받고 전원 수하물을 적재합니다.",
        photo: null,
        tip: "💡 차량 인수 시 기존 스크래치 및 계기판 사진을 미리 촬영해 두세요.",
        address: "Zürich Airport Rental Car Center",
        mapUrl: null
      },
      {
        id: "d1-3",
        time: "19:00",
        category: "eat",
        categoryName: "마트 장보기",
        title: "공항 내 마트 (Coop / Migros) 장보기",
        desc: "생수, 다음 날 아침 식재료(달걀, 빵, 버터 등), 과일 및 이동 중 간식거리를 구입합니다.",
        photo: null,
        tip: "⚠️ 중요 꿀팁: Migros(미그로)는 주류(맥주/와인)를 판매하지 않습니다! 맥주나 와인을 사시려면 반드시 공항 내 Coop(쿱)을 이용하세요.",
        address: null,
        mapUrl: null
      },
      {
        id: "d1-4",
        time: "20:00",
        category: "move",
        categoryName: "차량 이동",
        title: "취리히 공항 출발 ➔ 그린델발트",
        desc: "스위스 고속도로와 산악 도로를 따라 약 2시간 30분 동안 안전 운전하여 베이스캠프로 이동합니다.",
        photo: null,
        tip: "💡 스위스 고속도로 비넷(Vignette) 부착 여부를 렌터카 인수 시 꼭 확인하세요.",
        address: null,
        mapUrl: null
      },
      {
        id: "d1-5",
        time: "22:30",
        category: "tour",
        categoryName: "숙소 휴식",
        title: "그린델발트 숙소 도착 및 휴식",
        desc: "아늑한 샬레 숙소 체크인 후 짐 정리 및 다음 날 인터라켄 일정을 위해 충분한 휴식을 취합니다.",
        photo: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        tip: "📍 지도 바로가기 버튼을 누르시면 그린델발트 숙소/이동 경로 지도로 바로 연결됩니다.",
        address: "Grindelwald, Switzerland",
        // 사용자 요청 지도 링크 반영
        mapUrl: "https://maps.app.goo.gl/BRw8j3eKJvxqNbfQ9"
      }
    ]
  },
  {
    day: 2,
    dateStr: "9/6 (일)",
    title: "인터라켄 & 이젤발트",
    location: "하더쿨름 ➔ 브리엔츠 호수 ➔ 이젤발트",
    // Day 2 실사: 하더쿨름 전망대에서 본 인터라켄과 툰·브리엔츠 호수
    bgImage: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=1200&q=85",
    summary: "하더쿨름 전망대에서 두 호수와 영봉을 조망하고, 사랑의 불시착 명소인 에메랄드빛 이젤발트 호숫가를 산책합니다.",
    tags: ["하더쿨름 푸니쿨라", "쿱 2층 레스토랑", "이젤발트 선착장", "기스바흐 폭포"],
    items: [
      {
        id: "d2-1",
        time: "09:30",
        category: "move",
        categoryName: "출발",
        title: "숙소 출발 (그린델발트)",
        desc: "그린델발트에서 인터라켄 오스트(동역) 방면으로 렌터카 이동 (차량 약 25분 소요).",
        photo: null,
        tip: null,
        address: null,
        mapUrl: null
      },
      {
        id: "d2-2",
        time: "10:00",
        category: "move",
        categoryName: "푸니쿨라",
        title: "인터라켄 오스트(동역) 도착 및 하더쿨름 탑승",
        desc: "동역 주차장 주차 후 바로 인근 하더쿨름 푸니쿨라 승강장으로 이동하여 탑승합니다.",
        photo: null,
        tip: "💡 하더반 승강장은 인터라켄 동역에서 아레강 건너 도보 5분 거리에 있습니다.",
        address: "Harderbahn Interlaken",
        mapUrl: null
      },
      {
        id: "d2-3",
        time: "10:30~12:30",
        category: "tour",
        categoryName: "전망대 관람",
        title: "하더쿨름 전망대 산책 및 전경 감상",
        desc: "해발 1,322m 전망대 투 브릿지에서 툰 호수와 브리엔츠 호수, 아이거·묀히·융프라우 파노라마를 감상합니다.",
        // Day 2 하더쿨름 전망대 실사
        photo: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=800&q=85",
        tip: "💡 전망대 바닥이 유리로 된 돌출 브릿지에서 인생샷 포토스팟을 놓치지 마세요!",
        address: null,
        mapUrl: null
      },
      {
        id: "d2-4",
        time: "13:00",
        category: "eat",
        categoryName: "점심 식사",
        title: "인터라켄 Ost 역 앞 Coop 2층 레스토랑",
        desc: "인터라켄 오스트역 맞은편 대형 Coop 2층 뷔페 레스토랑에서 푸짐하고 가성비 좋은 점심 식사를 합니다.",
        photo: null,
        tip: "💡 취향대로 담아 무게나 그릇 단위로 계산하는 뷔페 형태로 가족 식사에 매우 편리합니다.",
        address: "Coop Supermarkt Interlaken Ost",
        mapUrl: null
      },
      {
        id: "d2-5",
        time: "14:30",
        category: "move",
        categoryName: "이동",
        title: "이젤발트(Iseltwald)로 이동 (차량 15분)",
        desc: "브리엔츠 호숫가 길을 따라 동화 같은 어촌 마을 이젤발트로 차량 이동합니다.",
        photo: null,
        tip: null,
        address: "Iseltwald, Switzerland",
        mapUrl: null
      },
      {
        id: "d2-6",
        time: "15:00~17:00",
        category: "tour",
        categoryName: "호수 산책",
        title: "이젤발트 선착장 산책 및 기스바흐 폭포 or 유람선",
        desc: "‘사랑의 불시착’ 피아노 촬영지로 유명한 이젤발트 선착장을 둘러보고, 기스바흐(Giessbach) 폭포 방문 또는 호수 유람선을 즐깁니다.",
        photo: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
        tip: "💡 선착장 나무 데크 입장료(약 5 CHF)가 있을 수 있으니 잔돈이나 카드를 준비하세요.",
        address: null,
        mapUrl: null
      },
      {
        id: "d2-7",
        time: "17:30",
        category: "eat",
        categoryName: "마트 장보기",
        title: "인터라켄 서역 Coop에서 저녁거리 추가 장보기",
        desc: "인터라켄 서역(Interlaken West) Coop 메가스토어에서 숙소 요리용 저녁 식재료 및 와인 추가 구매.",
        photo: null,
        tip: null,
        address: "Coop Supermarkt Interlaken West",
        mapUrl: null
      },
      {
        id: "d2-8",
        time: "18:30",
        category: "eat",
        categoryName: "숙소 복귀",
        title: "그린델발트 숙소 복귀 및 저녁 식사",
        desc: "숙소로 귀환하여 알프스 풍경을 바라보며 가족과 함께 편안한 저녁 식사 및 휴식.",
        photo: null,
        tip: null,
        address: null,
        mapUrl: null
      }
    ]
  },
  {
    day: 3,
    dateStr: "9/7 (월)",
    title: "몽트뢰(레만호) & 라보 포도밭",
    location: "시옹 성 ➔ 몽트뢰 ➔ 라보 포도원",
    // Day 3 실사: 레만 호수와 시옹 성 전경
    bgImage: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=85",
    summary: "레만 호수의 보석 시옹 성을 관람하고, 지중해풍 몽트뢰 호숫가 산책과 유네스코 세계유산 라보 포도밭 드라이브를 즐깁니다.",
    tags: ["시옹 성", "몽트뢰 프롬나드", "라보 포도밭", "장거리 드라이브"],
    items: [
      {
        id: "d3-1",
        time: "08:30",
        category: "move",
        categoryName: "조기 출발",
        title: "숙소 출발 (장거리이므로 일찍 시작)",
        desc: "그린델발트에서 불레(Bulle)를 거쳐 몽트뢰까지 약 2시간 15분 소요되는 장거리 드라이브입니다.",
        photo: null,
        tip: "💡 스위스 서부 프랑스어권 지역으로 진입하게 되며 도로 풍경이 아름답게 변화합니다.",
        address: null,
        mapUrl: null
      },
      {
        id: "d3-2",
        time: "10:45",
        category: "tour",
        categoryName: "고성 관람",
        title: "시옹 성(Chillon Castle) 도착 및 내부 관람",
        desc: "레만 호수 암벽 위에 세워진 아름다운 중세 고성. 지하 감옥, 영주의 방, 중세 무기 등을 둘러봅니다.",
        // Day 3 시옹 성 실사화
        photo: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=800&q=85",
        tip: "💡 시옹 성 외벽 호숫가 산책로에서도 환상적인 사진을 남길 수 있습니다.",
        address: "Château de Chillon, Av. de Chillon 21, 1820 Veytaux",
        mapUrl: null
      },
      {
        id: "d3-3",
        time: "13:00",
        category: "eat",
        categoryName: "점심 & 산책",
        title: "몽트뢰 호숫가에서 점심 식사 및 산책",
        desc: "야자수와 이국적인 꽃들이 가득한 몽트뢰 호숫가 프롬나드를 걷고, 프레디 머큐리 동상 방문 및 점심 식사를 즐깁니다.",
        photo: null,
        tip: "💡 프레디 머큐리 동상은 몽트뢰 중앙 마켓 광장 호숫가에 위치해 있습니다.",
        address: "Freddie Mercury Statue, Montreux",
        mapUrl: null
      },
      {
        id: "d3-4",
        time: "15:00",
        category: "tour",
        categoryName: "포도밭 드라이브",
        title: "라보(Lavaux) 포도밭으로 이동 및 드라이브/산책",
        desc: "유네스코 세계문화유산인 라보 계단식 포도밭과 레만 호수가 어우러진 경관 도로를 드라이브합니다.",
        photo: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80",
        tip: "💡 시간보고 갈지 말지 결정: 가족의 피로도와 일정을 고려하여 현장에서 유연하게 방문을 결정하세요.",
        address: "Lavaux Vineyard Terraces",
        mapUrl: null
      },
      {
        id: "d3-5",
        time: "17:00",
        category: "move",
        categoryName: "복귀 출발",
        title: "그린델발트로 복귀 출발",
        desc: "몽트뢰/라보에서 인터라켄을 거쳐 그린델발트 숙소로 복귀 주행 (약 2시간 15분 소요).",
        photo: null,
        tip: null,
        address: null,
        mapUrl: null
      },
      {
        id: "d3-6",
        time: "19:15",
        category: "tour",
        categoryName: "숙소 도착",
        title: "숙소 도착 및 저녁 식사",
        desc: "장거리 일정을 마치고 숙소 도착, 따뜻한 저녁 식사 및 휴식.",
        photo: null,
        tip: null,
        address: null,
        mapUrl: null
      }
    ]
  },
  {
    day: 4,
    dateStr: "9/8 (화)",
    title: "그린델발트 피르스트 + 핑슈텍 놀이터",
    location: "피르스트 클리프워크 ➔ 바흐알프제 ➔ 핑슈텍 터보건",
    // Day 4 실사: 피르스트 바흐알프제 호수와 설산 파노라마
    bgImage: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=85",
    summary: "아찔한 절벽길 클리프워크와 바흐알프제 하이킹, 오후에는 핑슈텍에서 짜릿한 알파인 터보건 루지를 즐깁니다.",
    tags: ["피르스트 곤돌라", "바흐알프제 하이킹", "핑슈텍 터보건", "성인 6회권 꿀팁"],
    items: [
      {
        id: "d4-1",
        time: "09:00",
        category: "move",
        categoryName: "곤돌라 승강장",
        title: "그린델발트 피르스트 곤돌라 승강장 이동",
        desc: "숙소에서 피르스트반(Firstbahn) 승강장으로 이동합니다 (도보 또는 로컬 버스 탑승).",
        photo: null,
        tip: null,
        address: "Firstbahn, Grindelwald",
        mapUrl: null
      },
      {
        id: "d4-2",
        time: "09:30~11:30",
        category: "trek",
        categoryName: "클리프워크 & 하이킹",
        title: "피르스트 클리프 워크 및 바흐알프제 호수 하이킹",
        desc: "낭떠러지 철제 전망 다리 클리프워크를 걷고, 설산 봉우리가 거울처럼 비치는 바흐알프제(Bachalpsee) 호수 왕복 트레킹(편도 1시간).",
        // Day 4 피르스트 바흐알프제 실사화
        photo: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=85",
        tip: "💡 코스가 완만하여 아이들도 걷기 좋으며, 호숫가 벤치에서 멋진 사진을 촬영하세요.",
        address: null,
        mapUrl: null
      },
      {
        id: "d4-3",
        time: "12:00",
        category: "eat",
        categoryName: "정상 점심",
        title: "피르스트 정상 점심 식사",
        desc: "해발 2,168m 피르스트 정상 레스토랑 테라스에서 만년설 설산을 바라보며 점심 식사.",
        photo: null,
        tip: null,
        address: "Berggasthaus First",
        mapUrl: null
      },
      {
        id: "d4-4",
        time: "13:30",
        category: "move",
        categoryName: "하행 곤돌라",
        title: "곤돌라 하행선 탑승 ➔ 피르스트반 하차",
        desc: "곤돌라를 타고 그린델발트 마을로 하산하여 오후 액티비티를 준비합니다.",
        photo: null,
        tip: null,
        address: null,
        mapUrl: null
      },
      {
        id: "d4-5",
        time: "14:30",
        category: "move",
        categoryName: "케이블카 이동",
        title: "핑슈텍 터보건 타러 핑슈텍반으로 이동",
        desc: "핑슈텍(Pfingstegg) 케이블카 승강장으로 이동하여 탑승합니다.",
        photo: null,
        tip: "💰 케이블카 왕복 요금: 성인 6명 CHF 16.00 × 6 = CHF 96.00 (스위스 패밀리카드 소지 시 어린이는 무료!)",
        address: "Luftseilbahn Grindelwald-Pfingstegg",
        mapUrl: null
      },
      {
        id: "d4-6",
        time: "15:00",
        category: "tip",
        categoryName: "터보건 액티비티",
        title: "핑슈텍 터보건(Toboggan) 루지 탑승",
        desc: "알프스 자연 경사를 질주하는 길이 736m의 터보건 봅슬레이를 신나게 탑승합니다.",
        // Day 4 핑슈텍 터보건 실사화
        photo: "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=800&q=85",
        tip: "💡 터보건 알뜰 탑승 꿀팁: 성인 1인 1회권 8 CHF / 6회권 43 CHF, 아이 1회 2 CHF ➔ 성인 6회권 1장(43 CHF)으로 성인 6명이 한 번씩 타고, 아이들은 1회 2 CHF권(6회 12 CHF)으로 3번씩 타면 총 55 CHF로 완벽 절약!",
        address: null,
        mapUrl: null
      },
      {
        id: "d4-7",
        time: "17:00",
        category: "eat",
        categoryName: "장보기",
        title: "복귀 준비 및 장보기",
        desc: "그린델발트 역 앞 Coop에서 저녁 및 내일 마테호른 이동 시 챙겨갈 간식거리 장보기.",
        photo: null,
        tip: null,
        address: "Coop Supermarkt Grindelwald",
        mapUrl: null
      },
      {
        id: "d4-8",
        time: "18:30",
        category: "tour",
        categoryName: "숙소 휴식",
        title: "숙소 휴식 및 식사",
        desc: "신나는 야외 활동을 마치고 숙소에서 따뜻한 저녁 식사와 휴식.",
        photo: null,
        tip: null,
        address: null,
        mapUrl: null
      }
    ]
  },
  {
    day: 5,
    dateStr: "9/9 (수)",
    title: "마테호른 (체르마트 & 수네가)",
    location: "칸데르슈테크 ➔ 태시 ➔ 체르마트 ➔ 수네가 ➔ 슈틸리제",
    // Day 5 실사: 마테호른 실사화 (체르마트 상징봉)
    bgImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=85",
    summary: "카트레인을 싣고 터널을 건너 체르마트로 이동! 웅장한 마테호른과 슈틸리제 호수에 비친 환상적인 반영을 만납니다.",
    tags: ["카트레인 선적", "태시 주차장", "수네가 푸니쿨라", "블라우헤르트", "슈틸리제 호수"],
    items: [
      {
        id: "d5-1",
        time: "07:00~09:00",
        category: "move",
        categoryName: "아침 출발",
        title: "그린델발트 출발 ➔ 칸데르슈테크 이동",
        desc: "마테호른의 맑은 아침 시야와 슈틸리제 반영을 위해 아침 7시 일찍 출발합니다 (렌트카 약 1시간 10분 소요).",
        photo: null,
        tip: null,
        address: "BLS Autoverlad Kandersteg",
        mapUrl: null
      },
      {
        id: "d5-2",
        time: "09:20~09:50",
        category: "move",
        categoryName: "카트레인 탑승",
        title: "칸데르슈테크 카트레인 선적 ➔ 고펜슈타인 이동",
        desc: "Kandersteg ↔ Goppenstein 오토페리 기차 위에 차를 직접 운전해 싣고 터널을 통과합니다 (약 15분 이동).",
        photo: null,
        tip: "💡 차 안에 그대로 탄 채로 알프스 바위 터널을 관통하는 스위스만의 특별한 경험입니다.",
        address: null,
        mapUrl: null
      },
      {
        id: "d5-3",
        time: "09:50~10:50",
        category: "move",
        categoryName: "태시 주차",
        title: "고펜슈타인 ➔ 태시(Täsch) 주차장 이동 및 주차",
        desc: "체르마트는 청정 전기차 전용 구역이므로 일반 차량의 최종 종착지인 태시 주차장에 주차합니다.",
        photo: null,
        tip: "🅿️ Matterhorn Terminal Täsch: 최신 대형 실내 주차장으로 셔틀열차역과 바로 연결되어 매우 편리합니다.",
        address: "Matterhorn Terminal Täsch",
        mapUrl: null
      },
      {
        id: "d5-4",
        time: "11:05~11:20",
        category: "move",
        categoryName: "셔틀열차",
        title: "태시 역 ➔ 체르마트(Zermatt) 역 셔틀열차 탑승",
        desc: "Matterhorn Gotthard Bahn 셔틀열차 탑승 (약 12분 이동, 20분 간격 운행).",
        photo: null,
        tip: null,
        address: "Bahnhof Täsch",
        mapUrl: null
      },
      {
        id: "d5-5",
        time: "11:30~11:50",
        category: "move",
        categoryName: "지하 푸니쿨라",
        title: "체르마트 역 ➔ 수네가 푸니쿨라 승강장 이동",
        desc: "체르마트 역에서 수네가 바른(Sunnegga-Bahnen) 지하 암반 승강장까지 도보 약 10분 이동.",
        photo: null,
        tip: null,
        address: "Sunnegga-Bahnen Zermatt",
        mapUrl: null
      },
      {
        id: "d5-6",
        time: "11:50~12:20",
        category: "move",
        categoryName: "케이블카 환승",
        title: "수네가 ➔ 블라우헤르트(Blauherd) 케이블카 이동",
        desc: "지하 초고속 푸니쿨라 Sunnegga Express 탑승 후 수네가 도착, 케이블카로 환승하여 블라우헤르트 정류장 하차.",
        photo: null,
        tip: null,
        address: null,
        mapUrl: null
      },
      {
        id: "d5-7",
        time: "12:25~12:50",
        category: "trek",
        categoryName: "호수 트레킹",
        title: "블라우헤르트 역 ➔ 슈틸리제 호수 트레킹",
        desc: "5대 호수 중 마테호른 반영이 가장 웅장한 슈틸리제(Stellisee) 호수까지 산책로 하이킹 (약 1.5km, 도보 20~25분).",
        // Day 5 12:25~12:50 슈틸리제 호수 실사화 (수면에 비친 마테호른)
        photo: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=85",
        tip: "💡 고도 약 2,537m이므로 바람막이 외투를 챙기세요.",
        address: "Stellisee, Zermatt",
        mapUrl: null
      },
      {
        id: "d5-8",
        time: "12:50~14:10",
        category: "eat",
        categoryName: "호숫가 피크닉",
        title: "슈틸리제 호수에서 점심식사 후 휴식",
        desc: "호수 수면에 완벽하게 비치는 마테호른을 감상하며 준비해 온 도시락/샌드위치 식사 및 여유로운 사진 촬영.",
        // Day 5 슈틸리제 호숫가 실사
        photo: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85",
        tip: null,
        address: null,
        mapUrl: null
      },
      {
        id: "d5-9",
        time: "14:10~14:40",
        category: "move",
        categoryName: "하행 이동",
        title: "블라우헤르트로 복귀하여 케이블카로 수네가 이동",
        desc: "슈틸리제 호수에서 블라우헤르트 승강장으로 돌아와 케이블카로 수네가로 하산.",
        photo: null,
        tip: null,
        address: null,
        mapUrl: null
      },
      {
        id: "d5-10",
        time: "14:40~15:30",
        category: "tour",
        categoryName: "마을 구경",
        title: "수네가 푸니쿨라로 체르마트 하산 후 약간의 구경",
        desc: "체르마트 반호프 거리의 전통 샬레 가옥, 명품 시계점, 기념품 샵 산책.",
        photo: null,
        tip: null,
        address: "Bahnhofstrasse, Zermatt",
        mapUrl: null
      },
      {
        id: "d5-11",
        time: "15:40~16:00",
        category: "move",
        categoryName: "셔틀 복귀",
        title: "체르마트 역 ➔ 태시 주차장 셔틀열차 탑승 및 차량 복귀",
        desc: "셔틀열차를 타고 태시 마테호른 터미널로 복귀하여 주차 정산 및 차량 탑승.",
        photo: null,
        tip: null,
        address: null,
        mapUrl: null
      },
      {
        id: "d5-12",
        time: "16:00~17:00",
        category: "move",
        categoryName: "터널 이동",
        title: "태시 ➔ 고펜슈타인 터널 입구 도착",
        desc: "고펜슈타인 역으로 이동하여 다시 카트레인 선적을 대기합니다.",
        photo: null,
        tip: null,
        address: null,
        mapUrl: null
      },
      {
        id: "d5-13",
        time: "17:00~18:30",
        category: "move",
        categoryName: "귀환",
        title: "그린델발트로 이동, 숙소 복귀",
        desc: "카트레인을 통과한 뒤 그린델발트 숙소로 복귀하여 풍성한 저녁 식사 및 휴식.",
        photo: null,
        tip: null,
        address: null,
        mapUrl: null
      }
    ]
  },
  {
    day: 6,
    dateStr: "9/10 (목)",
    title: "쉬니케 플라테 (Schynige Platte)",
    location: "빌더스빌 ➔ 쉬니케 플라테 ➔ 다우베 전망대",
    // Day 6 실사: 쉬니케 플라테 알프스 능선을 달리는 빈티지 산악열차 실사화
    bgImage: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=85",
    summary: "클래식 톱니바퀴 열차를 타고 알프스 고원에 올라, 아이거·묀히·융프라우 3대 봉우리 360도 파노라마를 감상합니다.",
    tags: ["웹캠 확인 필수", "빌더스빌 산악열차", "다우베 전망대 360도", "오베르베르그호른"],
    items: [
      {
        id: "d6-1",
        time: "09:30",
        category: "tip",
        categoryName: "웹캠 확인 & 출발",
        title: "숙소 출발 (웹캠 확인 후 꼭 날씨 좋을 때 가야 함)",
        desc: "쉬니케 플라테는 산꼭대기 시야가 핵심이므로 출발 전 실시간 웹캠을 반드시 확인하고 숙소를 출발합니다.",
        photo: null,
        tip: "⚠️ 중요 꿀팁: 안개가 짙거나 구름이 가리면 전망이 보이지 않으므로, 웹캠으로 3대 봉우리가 보일 때 올라가세요!",
        address: null,
        mapUrl: null
      },
      {
        id: "d6-2",
        time: "10:00~10:30",
        category: "move",
        categoryName: "환승 이동",
        title: "인터라켄 오스트 역에서 빌더스빌행 기차 탑승",
        desc: "인터라켄 오스트역에서 빌더스빌(Wilderswil)행 완행열차 탑승 (약 5분 소요).",
        photo: null,
        tip: null,
        address: "Wilderswil Railway Station",
        mapUrl: null
      },
      {
        id: "d6-3",
        time: "10:45",
        category: "move",
        categoryName: "빈티지 산악열차",
        title: "빌더스빌역에서 쉬니케 플라테행 기차 탑승",
        desc: "1893년 개통된 헤리티지 목조 톱니바퀴 열차 탑승 (10:45분, 11:25분 / 40분 간격 운행, 정상까지 약 50분 소요).",
        // Day 6 쉬니케 플라테 산악기차 실사화
        photo: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=85",
        tip: "💡 열차 진행 방향 오른쪽 좌석에 앉으시면 툰 호수와 브리엔츠 호수 전경이 더 잘 보입니다.",
        address: null,
        mapUrl: null
      },
      {
        id: "d6-4",
        time: "11:37",
        category: "trek",
        categoryName: "트레킹 시작",
        title: "쉬니케 플라테 역 도착 후 다우베 전망대 출발",
        desc: "해발 2,076m 고산 식물원 야생화 군락지를 지나 다우베(Daube) 전망대를 향해 산책 시작.",
        photo: null,
        tip: null,
        address: null,
        mapUrl: null
      },
      {
        id: "d6-5",
        time: "12:20",
        category: "tour",
        categoryName: "360도 전망",
        title: "다우베 전망대 도착 (360도 파노라마)",
        desc: "아이거, 묀히, 융프라우 3대 봉우리와 두 호수가 360도로 한눈에 펼쳐지는 알프스 최고 뷰포인트.",
        // Day 6 다우베 전망대 실사화
        photo: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85",
        tip: null,
        address: null,
        mapUrl: null
      },
      {
        id: "d6-6",
        time: "13:00",
        category: "eat",
        categoryName: "점심 식사",
        title: "점심 식사 (쉬니케 플라테역 또는 트래킹 적당한 곳)",
        desc: "전망대 테라스 레스토랑 또는 절경 포인트 벤치에서 맛있는 점심 식사.",
        photo: null,
        tip: null,
        address: "Restaurant Schynige Platte",
        mapUrl: null
      },
      {
        id: "d6-7",
        time: "14:00",
        category: "trek",
        categoryName: "트레킹 선택",
        title: "오베르 베르그 호른까지 난이도 확인 후 갈지 말지 결정",
        desc: "나무 계단 전망대가 있는 오베르 베르그 호른(Oberberghorn) 코스 난이도와 체력을 점검하고 진행 여부 결정.",
        photo: null,
        tip: "💡 코스 끝부분에 가파른 나무 사다리가 있으므로 편안한 운동화/등산화 필수.",
        address: null,
        mapUrl: null
      },
      {
        id: "d6-8",
        time: "15:01",
        category: "move",
        categoryName: "하행 열차",
        title: "트래킹 마무리 후 역에서 출발 (40분 간격)",
        desc: "쉬니케 플라테역에서 빌더스빌행 하행 산악열차 탑승.",
        photo: null,
        tip: null,
        address: null,
        mapUrl: null
      },
      {
        id: "d6-9",
        time: "15:53~16:20",
        category: "move",
        categoryName: "복귀 환승",
        title: "빌더스빌 도착 ➔ 인터라켄 오스트 도착",
        desc: "빌더스빌역 도착 후 열차 환승하여 인터라켄 오스트역으로 귀환.",
        photo: null,
        tip: null,
        address: null,
        mapUrl: null
      },
      {
        id: "d6-10",
        time: "17:00",
        category: "tour",
        categoryName: "시내 구경/식사",
        title: "인터라켄 오스트 구경 or 숙소 복귀 후 식사",
        desc: "인터라켄 동역 부근 기념품 쇼핑을 즐기거나 숙소로 복귀하여 여유로운 저녁 식사.",
        photo: null,
        tip: null,
        address: null,
        mapUrl: null
      }
    ]
  },
  {
    day: 7,
    dateStr: "9/11 (금)",
    title: "33번 트래킹 코스 (멘리헨)",
    location: "멘리헨 ➔ 왕관 전망대 ➔ 33번 파노라마 ➔ 클라이네 샤이덱",
    // Day 7 실사: 멘리헨 왕관 전망대와 아이거 북벽 실사화
    bgImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85",
    summary: "웅장한 아이거 북벽을 마주 보며 걷는 스위스 최고의 명품 하이킹 33번 코스와 멘리헨 알파인 놀이터를 즐깁니다.",
    tags: ["멘리헨 곤돌라", "왕관 전망대", "멘리헨 놀이터", "33번 파노라마 하이킹"],
    items: [
      {
        id: "d7-1",
        time: "10:00",
        category: "move",
        categoryName: "최신 곤돌라",
        title: "그린델발트 터미널에서 멘리헨행 곤돌라 탑승",
        desc: "최첨단 그린델발트 터미널에서 멘리헨(Männlichen)행 10인승 고속 곤돌라에 탑승합니다.",
        photo: null,
        tip: null,
        address: "Grindelwald Terminal",
        mapUrl: null
      },
      {
        id: "d7-2",
        time: "10:40",
        category: "tour",
        categoryName: "왕관 전망대",
        title: "멘리헨 왕관 전망대 (로열 워크, Royal Walk)",
        desc: "멘리헨 하차 후 거대한 왕관 조형물이 있는 능선 정상까지 산책 (약 20~40분 소요, 경사가 다소 있으나 뷰가 환상적임).",
        // Day 7 멘리헨 왕관 전망대 실사화
        photo: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=85",
        tip: "💡 전망대 왕관 모양 데크에서 융프라우 3대 봉우리를 배경으로 기념사진을 남기세요!",
        address: null,
        mapUrl: null
      },
      {
        id: "d7-3",
        time: "10:40~12:40",
        category: "tour",
        categoryName: "알파인 놀이터",
        title: "멘리헨 놀이터에서 아이들 놀기",
        desc: "해발 2,230m 알프스 천상의 놀이터에서 거대한 카우(젖소) 슬라이드와 트램펄린으로 아이들과 즐거운 시간.",
        photo: null,
        tip: "💡 탁 트인 설산 뷰 카페 테라스에서 커피를 마시며 아이들이 노는 모습을 편하게 지켜볼 수 있습니다.",
        address: null,
        mapUrl: null
      },
      {
        id: "d7-4",
        time: "12:40~16:00",
        category: "trek",
        categoryName: "33번 명품 하이킹",
        title: "식사 후 33번 파노라마 하이킹 (멘리헨~클라이네 샤이덱)",
        desc: "약 4.4km의 완만한 내리막 코스로, 아이거(Eiger) 북벽의 위용을 정면으로 감상하며 걷는 스위스 최고의 명품 하이킹 코스.",
        // Day 7 그 아래 33번 트레킹 코스 실사화
        photo: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=85",
        tip: "💡 소요시간 약 1.5~2시간. 전 구간이 완만한 내리막길이라 남녀노소 누구나 아주 편안하게 걸을 수 있습니다.",
        address: "Panoramaweg 33 Männlichen - Kleine Scheidegg",
        mapUrl: null
      },
      {
        id: "d7-5",
        time: "16:30",
        category: "move",
        categoryName: "둘러본 후 하산",
        title: "클라이네 샤이덱 여유있게 둘러본 후 하산",
        desc: "융프라우요흐로 향하는 산악열차의 환승지 클라이네 샤이덱을 여유 있게 둘러본 뒤 벵엔알프 철도로 그린델발트 복귀.",
        photo: null,
        tip: null,
        address: "Kleine Scheidegg Railway Station",
        mapUrl: null
      }
    ]
  },
  {
    day: 8,
    dateStr: "9/12 (토)",
    title: "베른, 취리히 산책 및 출국",
    location: "베른 구시가지 ➔ 취리히 시내 ➔ 취리히 공항",
    // Day 8 실사: 유네스코 세계유산 베른 구시가지와 아레강 파노라마
    bgImage: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1200&q=85",
    summary: "유네스코 세계유산 중세 도시 베른의 시계탑과 장미공원을 산책하고, 취리히 시내를 거쳐 렌터카 반납 후 귀국합니다.",
    tags: ["베른 시청 주차", "시계탑 & 곰공원", "아레강 산책", "취리히 시내", "렌터카 반납", "19:30 출국"],
    items: [
      {
        id: "d8-1",
        time: "09:30",
        category: "move",
        categoryName: "체크아웃 & 출발",
        title: "그린델발트 숙소 체크아웃 및 출발",
        desc: "그린델발트 숙소 체크아웃 완료 후 수하물을 렌터카에 싣고 스위스의 수도 베른으로 이동 (차량 약 1시간 소요).",
        photo: null,
        tip: null,
        address: null,
        mapUrl: null
      },
      {
        id: "d8-2",
        time: "10:45",
        category: "move",
        categoryName: "베른 주차",
        title: "베른 시청 주차 (AMAG Parking AG)",
        desc: "베른 구시가지 및 장미공원 도보 접근성이 가장 우수한 AMAG Parking AG에 주차합니다.",
        photo: null,
        tip: "🅿️ 주소: Postgasshalde 50, 3011 Bern (아래 주소 복사 버튼을 눌러 내비게이션에 바로 입력하세요!)",
        address: "Postgasshalde 50, 3011 Bern, Switzerland",
        mapUrl: "https://maps.google.com/?q=Postgasshalde+50,+3011+Bern"
      },
      {
        id: "d8-3",
        time: "11:30",
        category: "tour",
        categoryName: "베른 명소 산책",
        title: "시계탑, 장미공원, 곰 공원 방문 및 아레강 산책",
        desc: "800년 된 치트글로게(Zytglogge) 천문시계탑의 인형극, 아레강 곰 공원(Bärenpark), 베른 구시가지 전경이 한눈에 보이는 장미공원(Rosengarten) 산책.",
        // Day 8 베른 시계탑 & 구시가지 실사화
        photo: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=85",
        tip: "💡 장미공원 언덕에서 바라보는 에메랄드빛 아레강과 붉은 지붕 파노라마는 베른 최고의 뷰포인트입니다.",
        address: "Rosengarten Bern",
        mapUrl: null
      },
      {
        id: "d8-4",
        time: "12:30",
        category: "eat",
        categoryName: "점심 식사",
        title: "베른 구시가지 점심 식사",
        desc: "유네스코 아케이드 거리에 늘어선 레스토랑에서 스위스 정통 요리로 마지막 점심 식사.",
        photo: null,
        tip: null,
        address: null,
        mapUrl: null
      },
      {
        id: "d8-5",
        time: "13:30",
        category: "move",
        categoryName: "취리히 이동",
        title: "취리히로 출발",
        desc: "베른에서 취리히 시내로 고속도로 주행 이동 (차량 약 1시간 30분 소요).",
        photo: null,
        tip: null,
        address: null,
        mapUrl: null
      },
      {
        id: "d8-6",
        time: "15:30",
        category: "tour",
        categoryName: "취리히 시내",
        title: "취리히 시내 도착 후 구경",
        desc: "리마트 강변 산책, 반호프 거리 명품점 둘러보기, 프라우뮌스터 교회 샤갈 스테인드글라스 관람 및 스위스 초콜릿 쇼핑.",
        photo: null,
        tip: null,
        address: "Bahnhofstrasse, Zürich",
        mapUrl: null
      },
      {
        id: "d8-7",
        time: "16:30",
        category: "move",
        categoryName: "공항 출발",
        title: "취리히 공항으로 출발",
        desc: "취리히 시내에서 취리히 국제공항(ZRH)으로 이동 (차량 약 15~20분 소요).",
        photo: null,
        tip: null,
        address: null,
        mapUrl: null
      },
      {
        id: "d8-8",
        time: "17:00",
        category: "move",
        categoryName: "렌터카 반납",
        title: "취리히 공항 도착 및 렌터카 반납",
        desc: "공항 인근 주유소에서 주유 완충 후 Rental Car Return 구역에 차량 반납 및 점검.",
        photo: null,
        tip: "⚠️ 주유 영수증을 꼭 챙기시고, 차량 실내에 소지품(여권, 스마트폰, 충전기 등)이 없는지 꼼꼼히 확인하세요.",
        address: "Zürich Airport Rental Car Return",
        mapUrl: null
      },
      {
        id: "d8-9",
        time: "19:30",
        category: "move",
        categoryName: "출국 탑승",
        title: "취리히 공항 출국 탑승 ✈️",
        desc: "수하물 위탁 및 보안 검색 후 면세점 쇼핑, 한국행 비행기 탑승. 잊지 못할 7박 8일 알프스 여행의 마무리!",
        photo: null,
        tip: null,
        address: null,
        mapUrl: null
      }
    ]
  }
];

// Active Itinerary Data (defaults to local data, updated in real-time from Firestore)
let ITINERARY_DATA = [...DEFAULT_ITINERARY_DATA];

// Application State
let currentDay = 1;
let currentFilter = 'all';

// DOM Elements
const tabsScroll = document.getElementById('tabsScroll');
const activeDayBanner = document.getElementById('activeDayBanner');
const timelineContainer = document.getElementById('timelineContainer');
const filterChips = document.querySelectorAll('.filter-chip');
const btnPrevDay = document.getElementById('btnPrevDay');
const btnNextDay = document.getElementById('btnNextDay');
const prevDayTitle = document.getElementById('prevDayTitle');
const nextDayTitle = document.getElementById('nextDayTitle');
const toastMessage = document.getElementById('toastMessage');

// Dual Clock Elements
const swissDateText = document.getElementById('swissDateText');
const swissClockText = document.getElementById('swissClockText');
const koreaDateText = document.getElementById('koreaDateText');
const koreaClockText = document.getElementById('koreaClockText');
const headerSwissTime = document.getElementById('headerSwissTime');
const headerKoreaTime = document.getElementById('headerKoreaTime');

// Modals
const webcamModal = document.getElementById('webcamModal');
const calcModal = document.getElementById('calcModal');
const menuDrawer = document.getElementById('menuDrawer');

// Buttons for Modals & Actions
const btnOpenMenu = document.getElementById('btnOpenMenu');
const btnCloseMenu = document.getElementById('btnCloseMenu');
const btnCloseWebcam = document.getElementById('btnCloseWebcam');
const btnCloseCalc = document.getElementById('btnCloseCalc');
const dockSchedule = document.getElementById('dockSchedule');
const dockWebcam = document.getElementById('dockWebcam');
const dockCalculator = document.getElementById('dockCalculator');
const drawerWebcamBtn = document.getElementById('drawerWebcamBtn');
const drawerCalcBtn = document.getElementById('drawerCalcBtn');
const btnScrollTop = document.getElementById('btnScrollTop');

// Weather Widget Elements & Data
const weatherLocationSelect = document.getElementById('weatherLocationSelect');
const weatherIcon = document.getElementById('weatherIcon');
const weatherTemp = document.getElementById('weatherTemp');
const weatherCondition = document.getElementById('weatherCondition');
const weatherRange = document.getElementById('weatherRange');
const weatherAltBadge = document.getElementById('weatherAltBadge');
const weatherTipStrip = document.getElementById('weatherTipStrip');

const SWISS_WEATHER_MAP = {
  grindelwald: {
    name: "그린델발트 (베이스캠프)",
    alt: "고도 1,034m",
    temp: 16,
    icon: "⛅",
    condition: "구름 조금 / 쾌적함",
    min: 9,
    max: 19,
    tip: "💡 그린델발트 아침/저녁은 쌀쌀하니 가벼운 외투나 가디건을 준비하세요.",
    lat: 46.6242,
    lon: 8.0414
  },
  zermatt: {
    name: "체르마트·마테호른",
    alt: "고도 1,620m",
    temp: 14,
    icon: "☀️",
    condition: "맑음 / 쾌청한 시야",
    min: 6,
    max: 17,
    tip: "💡 수네가·슈틸리제(2,500m) 하이킹 시 산꼭대기 바람막이 외투를 챙기세요.",
    lat: 45.9765,
    lon: 7.7491
  },
  first: {
    name: "피르스트 정상",
    alt: "고도 2,168m",
    temp: 9,
    icon: "🌤️",
    condition: "부분 구름 / 쌀쌀함",
    min: 3,
    max: 12,
    tip: "💡 고산지대 능선은 체감온도가 낮으니 방풍 재킷과 모자를 권장합니다.",
    lat: 46.6611,
    lon: 8.0538
  },
  interlaken: {
    name: "인터라켄·하더쿨름",
    alt: "고도 568m",
    temp: 19,
    icon: "☀️",
    condition: "맑음 / 산책하기 완벽",
    min: 11,
    max: 22,
    tip: "💡 호숫가 산책과 하더쿨름 전망대 관람에 완벽한 날씨입니다.",
    lat: 46.6863,
    lon: 7.8632
  },
  schynige: {
    name: "쉬니케 플라테",
    alt: "고도 2,076m",
    temp: 10,
    icon: "☀️",
    condition: "맑음 / 360° 시야 우수",
    min: 4,
    max: 13,
    tip: "💡 다우베 전망대에서 아이거·묀히·융프라우가 선명하게 조망됩니다.",
    lat: 46.6534,
    lon: 7.9103
  },
  mannlichen: {
    name: "멘리헨 왕관",
    alt: "고도 2,230m",
    temp: 8,
    icon: "🌤️",
    condition: "쾌청함 / 시원한 바람",
    min: 3,
    max: 11,
    tip: "💡 33번 트레킹 코스(4.4km) 출발 전 장갑과 윈드브레이커를 챙기세요.",
    lat: 46.6125,
    lon: 7.9408
  },
  montreux: {
    name: "몽트뢰·시옹 성",
    alt: "고도 390m",
    temp: 21,
    icon: "☀️",
    condition: "온화함 / 지중해풍 기후",
    min: 13,
    max: 24,
    tip: "💡 레만 호숫가 프롬나드와 시옹 성 관람에 매우 따뜻하고 좋습니다.",
    lat: 46.4312,
    lon: 6.9107
  },
  bern: {
    name: "베른 구시가지",
    alt: "고도 542m",
    temp: 20,
    icon: "⛅",
    condition: "쾌적함 / 구시가지 산책",
    min: 11,
    max: 23,
    tip: "💡 장미공원과 아레강 산책을 편안하게 즐기실 수 있습니다.",
    lat: 46.9480,
    lon: 7.4474
  },
  zurich: {
    name: "취리히 공항",
    alt: "고도 408m",
    temp: 20,
    icon: "🌤️",
    condition: "맑음 / 비행 쾌청",
    min: 12,
    max: 23,
    tip: "💡 출국일 이동과 렌터카 반납에 이상적인 기상 조건입니다.",
    lat: 47.4582,
    lon: 8.5555
  }
};

// Weather Selector setup
function setupWeatherWidget() {
  if (!weatherLocationSelect) return;

  function updateWeatherView(key) {
    const data = SWISS_WEATHER_MAP[key] || SWISS_WEATHER_MAP['grindelwald'];
    weatherIcon.textContent = data.icon;
    weatherTemp.textContent = `${data.temp}°`;
    weatherCondition.textContent = data.condition;
    weatherRange.textContent = `최저 ${data.min}°C / 최고 ${data.max}°C`;
    weatherAltBadge.textContent = data.alt;
    weatherTipStrip.textContent = data.tip;

    // Optional: Try live Open-Meteo API
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data.lat}&longitude=${data.lon}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin`)
      .then(res => res.json())
      .then(resData => {
        if (resData && resData.current && resData.current.temperature_2m !== undefined) {
          const liveTemp = Math.round(resData.current.temperature_2m);
          weatherTemp.textContent = `${liveTemp}°`;
          if (resData.daily && resData.daily.temperature_2m_max && resData.daily.temperature_2m_min) {
            const minT = Math.round(resData.daily.temperature_2m_min[0]);
            const maxT = Math.round(resData.daily.temperature_2m_max[0]);
            weatherRange.textContent = `실시간 최저 ${minT}°C / 최고 ${maxT}°C`;
          }
        }
      })
      .catch(() => {
        // Fallback gracefully to predefined reliable Swiss seasonal data
      });
  }

  weatherLocationSelect.addEventListener('change', (e) => {
    updateWeatherView(e.target.value);
  });

  // Initial display
  updateWeatherView('grindelwald');
}

// ==========================================================================
// Firebase Firestore Cloud Sync & Auto-Seeding
// ==========================================================================
function updateCloudStatus(isLive, labelText) {
  const badge = document.getElementById('cloudSyncBadge');
  if (!badge) return;
  if (isLive) {
    badge.className = 'cloud-sync-badge synced';
    badge.innerHTML = `🟢 ${labelText || 'Cloud'}`;
    badge.title = 'Firestore와 실시간 연동 중';
  } else {
    badge.className = 'cloud-sync-badge';
    badge.innerHTML = `☁️ ${labelText || 'Local'}`;
    badge.title = '로컬 기본 데이터 모드 (Firestore 연결 대기)';
  }
}

async function initFirestoreItinerary() {
  if (!db) {
    console.log("Firestore db 객체가 없어 로컬 데이터를 사용합니다.");
    updateCloudStatus(false, 'Local');
    return;
  }

  try {
    const colRef = db.collection('itinerary');
    updateCloudStatus(false, '연결 중..');
    const snapshot = await colRef.get();

    if (snapshot.empty) {
      console.log("Firestore 'itinerary' 컬렉션이 비어 있어 기본 일정을 자동 시딩(upload)합니다...");
      updateCloudStatus(true, '시딩 중..');

      // Batch upload Day 1 to Day 8
      const batch = db.batch();
      DEFAULT_ITINERARY_DATA.forEach(dayItem => {
        const docRef = colRef.doc(`day_${dayItem.day}`);
        batch.set(docRef, dayItem);
      });
      await batch.commit();
      console.log("Firestore 7박 8일 일정 자동 시딩 완료!");
      showToast("☁️ Firestore에 7박 8일 일정이 자동 등록되었습니다.");
      updateCloudStatus(true, '동기화됨');
    } else {
      console.log(`Firestore에 이미 ${snapshot.size}개의 일정 문서가 존재합니다.`);
      updateCloudStatus(true, '동기화됨');
    }

    // Set up real-time onSnapshot listener
    listenToItinerary();
  } catch (error) {
    console.warn("Firestore access info (보안 규칙 또는 네트워크):", error);
    updateCloudStatus(false, 'Local');
    if (error && error.code === 'permission-denied') {
      console.info("💡 팁: Firebase 콘솔 > Firestore > 규칙(Rules) 탭에서 읽기/쓰기 권한(allow read, write: if true;)을 설정하시면 클라우드 실시간 동기화가 활성화됩니다.");
    }
  }
}

function listenToItinerary() {
  if (!db) return;

  db.collection('itinerary').onSnapshot(snapshot => {
    if (!snapshot.empty) {
      const fetched = [];
      snapshot.forEach(doc => {
        fetched.push(doc.data());
      });
      fetched.sort((a, b) => a.day - b.day);
      if (fetched.length > 0) {
        ITINERARY_DATA = fetched;
        renderDayTabs();
        renderActiveDay(false);
        updateCloudStatus(true, '동기화됨');
      }
    }
  }, error => {
    console.warn("Firestore onSnapshot error:", error);
    updateCloudStatus(false, 'Local');
  });
}

// Initialize
function initApp() {
  renderDayTabs();
  renderActiveDay(false); // First load: don't auto scroll
  setupEventListeners();
  setupAccordion();
  startDualClock();
  setupWeatherWidget();
  initFirestoreItinerary();
  setupExpenseTracker();
}

// 1. Render Horizontal Sticky Tabs
function renderDayTabs() {
  tabsScroll.innerHTML = '';
  ITINERARY_DATA.forEach(data => {
    const tabBtn = document.createElement('button');
    tabBtn.className = `day-tab-btn ${data.day === currentDay ? 'active' : ''}`;
    tabBtn.setAttribute('data-day', data.day);
    tabBtn.innerHTML = `
      <span class="tab-day">Day ${data.day}</span>
      <span class="tab-date">${data.dateStr}</span>
    `;
    tabBtn.addEventListener('click', () => {
      switchDay(data.day);
    });
    tabsScroll.appendChild(tabBtn);
  });
}

// 2. Switch Day & Auto Scroll to Top of Active Day
function switchDay(dayNumber) {
  currentDay = dayNumber;
  
  // Update Tab States
  document.querySelectorAll('.day-tab-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.getAttribute('data-day')) === currentDay);
  });

  // Scroll active tab into view horizontally
  const activeTab = document.querySelector(`.day-tab-btn[data-day="${currentDay}"]`);
  if (activeTab) {
    activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }

  // Render Day Banner & Timeline (and scroll to day top)
  renderActiveDay(true);
}

// 3. Render Active Day Contents
function renderActiveDay(shouldScrollToDayTop = false) {
  const dayData = ITINERARY_DATA.find(d => d.day === currentDay);
  if (!dayData) return;

  // Banner
  activeDayBanner.style.backgroundImage = `url('${dayData.bgImage}')`;

  // Calculate day total expense for banner badge
  const currentDayExp = travelExpenses.filter(e => (e.day || 1) === dayData.day);
  const currentDayChf = currentDayExp.reduce((sum, e) => sum + (Number(e.amountChf) || 0), 0);
  const dayExpenseBadgeHtml = currentDayChf > 0
    ? `<button type="button" class="day-expense-trigger-pill" id="btnBannerDayExpense">💳 Day ${dayData.day} 지출: ${currentDayChf.toFixed(2)} CHF</button>`
    : `<button type="button" class="day-expense-trigger-pill empty" id="btnBannerDayExpense">💳 + Day ${dayData.day} 지출 기록</button>`;

  activeDayBanner.innerHTML = `
    <div class="day-meta-row">
      <div style="display: flex; align-items: center; gap: 6px;">
        <span class="day-index-pill">DAY ${dayData.day}</span>
        <span class="day-date-str">${dayData.dateStr}</span>
      </div>
      ${dayExpenseBadgeHtml}
    </div>
    <h2 class="active-day-title">${dayData.title}</h2>
    <p class="active-day-summary">${dayData.summary}</p>
    <div class="day-highlights-pill-wrap">
      ${dayData.tags.map(tag => `<span class="day-tag-pill">#${tag}</span>`).join('')}
    </div>
  `;

  const bannerExpenseBtn = document.getElementById('btnBannerDayExpense');
  if (bannerExpenseBtn) {
    bannerExpenseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(calcModal);
      if (typeof updateExpenseSelectedDayView === 'function') {
        updateExpenseSelectedDayView(dayData.day);
      }
    });
  }

  // Update Prev/Next Buttons
  btnPrevDay.disabled = currentDay === 1;
  btnNextDay.disabled = currentDay === ITINERARY_DATA.length;
  
  if (currentDay > 1) {
    const prev = ITINERARY_DATA[currentDay - 2];
    prevDayTitle.textContent = `Day ${prev.day} (${prev.dateStr})`;
  } else {
    prevDayTitle.textContent = '첫날입니다';
  }

  if (currentDay < ITINERARY_DATA.length) {
    const next = ITINERARY_DATA[currentDay];
    nextDayTitle.textContent = `Day ${next.day} (${next.dateStr})`;
  } else {
    nextDayTitle.textContent = '마지막날입니다';
  }

  // Render Timeline
  renderTimelineItems(dayData.items);

  // 4. DAY 탭 및 이전/다음 날짜 클릭 시 해당 DAY 최상단으로 화면 이동
  if (shouldScrollToDayTop) {
    setTimeout(() => {
      const banner = document.getElementById('activeDayBanner');
      if (banner) {
        const stickyNav = document.getElementById('stickyTabNav');
        const navOffset = stickyNav ? stickyNav.offsetHeight : 56;
        const bannerPosition = banner.getBoundingClientRect().top + window.pageYOffset - navOffset - 12;
        window.scrollTo({ top: bannerPosition, behavior: 'smooth' });
      }
    }, 80);
  }
}

// 4. Render Timeline Items with Filter (Visit Checkbox completely removed as requested)
function renderTimelineItems(items) {
  timelineContainer.innerHTML = '';

  items.forEach(item => {
    const isHiddenByFilter = (currentFilter !== 'all' && item.category !== currentFilter);

    const itemEl = document.createElement('div');
    itemEl.className = `timeline-item ${isHiddenByFilter ? 'hidden' : ''}`;
    itemEl.setAttribute('data-id', item.id);
    itemEl.setAttribute('data-category', item.category);

    const mapLinkUrl = item.mapUrl ? item.mapUrl : (item.address ? `https://maps.google.com/?q=${encodeURIComponent(item.address)}` : null);

    itemEl.innerHTML = `
      <div class="timeline-card">
        <div class="card-top-row">
          <span class="time-badge">⏰ ${item.time}</span>
          <span class="category-badge ${item.category}">${item.categoryName}</span>
        </div>
        <h3 class="card-title">${item.title}</h3>

        ${item.photo ? `
          <div class="card-photo-box">
            <img src="${item.photo}" alt="${item.title}" loading="lazy">
          </div>
        ` : ''}

        <p class="card-desc">${item.desc}</p>

        ${item.tip ? `
          <div class="card-highlight-tip">
            ${item.tip}
          </div>
        ` : ''}

        <div class="card-actions-row">
          ${item.address ? `
            <button class="btn-copy-address" data-address="${item.address}">
              📋 주소 복사
            </button>
          ` : ''}

          ${mapLinkUrl ? `
            <a class="btn-open-link" href="${mapLinkUrl}" target="_blank" rel="noopener noreferrer">
              🗺️ 지도 보기 ↗
            </a>
          ` : ''}
        </div>
      </div>
    `;

    // Address Copy Click Event
    const copyBtn = itemEl.querySelector('.btn-copy-address');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const address = copyBtn.getAttribute('data-address');
        copyToClipboard(address);
      });
    }

    timelineContainer.appendChild(itemEl);
  });
}

// 5. Clipboard Copy Helper with Toast
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`주소가 복사되었습니다: "${text}"`);
  }).catch(() => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showToast(`주소가 복사되었습니다: "${text}"`);
  });
}

function showToast(msg) {
  toastMessage.textContent = msg;
  toastMessage.classList.add('show');
  setTimeout(() => {
    toastMessage.classList.remove('show');
  }, 2600);
}

// 6. Dual Real-Time Clock: Swiss (Europe/Zurich) & Korea (Asia/Seoul)
function startDualClock() {
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

  function updateClocks() {
    const now = new Date();

    // 1) Swiss Time (Europe/Zurich)
    try {
      const swissDateStr = new Intl.DateTimeFormat('ko-KR', {
        timeZone: 'Europe/Zurich',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short'
      }).format(now);

      const swissTimeStr = new Intl.DateTimeFormat('ko-KR', {
        timeZone: 'Europe/Zurich',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);

      const swissHourMinute = new Intl.DateTimeFormat('ko-KR', {
        timeZone: 'Europe/Zurich',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(now);

      if (swissDateText) swissDateText.textContent = swissDateStr;
      if (swissClockText) swissClockText.textContent = swissTimeStr;
      if (headerSwissTime) headerSwissTime.textContent = swissHourMinute;
    } catch (e) {
      console.error(e);
    }

    // 2) Korea Time (Asia/Seoul)
    try {
      const koreaDateStr = new Intl.DateTimeFormat('ko-KR', {
        timeZone: 'Asia/Seoul',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short'
      }).format(now);

      const koreaTimeStr = new Intl.DateTimeFormat('ko-KR', {
        timeZone: 'Asia/Seoul',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);

      const koreaHourMinute = new Intl.DateTimeFormat('ko-KR', {
        timeZone: 'Asia/Seoul',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(now);

      if (koreaDateText) koreaDateText.textContent = koreaDateStr;
      if (koreaClockText) koreaClockText.textContent = koreaTimeStr;
      if (headerKoreaTime) headerKoreaTime.textContent = koreaHourMinute;
    } catch (e) {
      console.error(e);
    }
  }

  updateClocks();
  setInterval(updateClocks, 1000);
}

// 7. Accordion
function setupAccordion() {
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;
      parent.classList.toggle('open');
    });
  });
}

// 8. Event Listeners
function setupEventListeners() {
  // Filter Chips
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilter = chip.getAttribute('data-filter');
      
      const dayData = ITINERARY_DATA.find(d => d.day === currentDay);
      if (dayData) {
        renderTimelineItems(dayData.items);
      }
    });
  });

  // Prev / Next Navigation with Auto-Scroll to 1st item
  btnPrevDay.addEventListener('click', () => {
    if (currentDay > 1) switchDay(currentDay - 1);
  });
  btnNextDay.addEventListener('click', () => {
    if (currentDay < ITINERARY_DATA.length) switchDay(currentDay + 1);
  });

  // Modal Open/Close
  dockWebcam.addEventListener('click', () => openModal(webcamModal));
  drawerWebcamBtn.addEventListener('click', () => {
    closeModal(menuDrawer);
    openModal(webcamModal);
  });
  btnCloseWebcam.addEventListener('click', () => closeModal(webcamModal));

  dockCalculator.addEventListener('click', () => openModal(calcModal));
  drawerCalcBtn.addEventListener('click', () => {
    closeModal(menuDrawer);
    openModal(calcModal);
  });
  btnCloseCalc.addEventListener('click', () => closeModal(calcModal));

  btnOpenMenu.addEventListener('click', () => openModal(menuDrawer));
  btnCloseMenu.addEventListener('click', () => closeModal(menuDrawer));

  // Drawer Nav Links
  document.querySelectorAll('.drawer-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetDay = parseInt(link.getAttribute('data-day'));
      closeModal(menuDrawer);
      switchDay(targetDay);
    });
  });

  // Close modals on clicking overlay background
  [webcamModal, calcModal, menuDrawer].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  // Scroll to Top
  btnScrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  dockSchedule.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function openModal(modalEl) {
  modalEl.classList.add('active');
  document.body.style.overflow = 'hidden';

  // 1. 금액 및 통화: 모달 열릴 때 숫자 입력창 자동 포커스 & 현재 Day 자동 선택
  if (modalEl && modalEl.id === 'calcModal') {
    if (typeof updateExpenseSelectedDayView === 'function') {
      updateExpenseSelectedDayView(currentDay || 1);
    }
    setTimeout(() => {
      const amountInput = document.getElementById('expenseAmount');
      if (amountInput) {
        amountInput.focus();
        amountInput.select();
      }
    }, 180);
  }
}

function closeModal(modalEl) {
  modalEl.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================================================
// Travel Expense Tracker & Budget Calculator Logic (Day 1 ~ Day 8 Breakdown)
// ==========================================================================
const CHF_KRW_RATE = 1565; // 기준 환율: 1 CHF = 약 1,565원
const EXPENSES_STORAGE_KEY = 'swiss_travel_expenses_v1';
let travelExpenses = [];

const TRIP_DAYS_INFO = [
  { day: 1, dateStr: "9/5 (토)", title: "취리히 입국 및 그린델발트 이동" },
  { day: 2, dateStr: "9/6 (일)", title: "하더쿨름 & 이젤발트" },
  { day: 3, dateStr: "9/7 (월)", title: "몽트뢰 시옹 성 & 라보 포도밭" },
  { day: 4, dateStr: "9/8 (화)", title: "그린델발트 피르스트 & 핑슈텍" },
  { day: 5, dateStr: "9/9 (수)", title: "마테호른 & 체르마트 슈틸리제" },
  { day: 6, dateStr: "9/10 (목)", title: "쉬니케 플라테 파노라마" },
  { day: 7, dateStr: "9/11 (금)", title: "멘리헨 33번 트래킹 코스" },
  { day: 8, dateStr: "9/12 (토)", title: "베른 구시가지 & 취리히 출국" }
];

let selectedExpenseDay = 1;

function updateExpenseSelectedDayView(dayNum) {
  selectedExpenseDay = dayNum;
  const expenseDaySelector = document.getElementById('expenseDaySelector');
  const selectedDayInfoText = document.getElementById('selectedDayInfoText');

  if (expenseDaySelector) {
    expenseDaySelector.querySelectorAll('.day-select-chip').forEach(chip => {
      chip.classList.toggle('active', parseInt(chip.getAttribute('data-day')) === selectedExpenseDay);
    });
    const activeChip = expenseDaySelector.querySelector(`.day-select-chip[data-day="${selectedExpenseDay}"]`);
    if (activeChip) {
      activeChip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  if (selectedDayInfoText) {
    const dayInfo = TRIP_DAYS_INFO.find(d => d.day === selectedExpenseDay) || TRIP_DAYS_INFO[0];
    selectedDayInfoText.textContent = `Day ${dayInfo.day} (${dayInfo.dateStr})`;
  }
}

function setupExpenseTracker() {
  const currencyToggle = document.getElementById('currencyToggle');
  const amountInput = document.getElementById('expenseAmount');
  const amountSymbol = document.getElementById('amountCurrSymbol');
  const btnClearAmount = document.getElementById('btnClearAmount');
  const exchangeCalcResult = document.getElementById('exchangeCalcResult');
  const exchangeRateDesc = document.getElementById('exchangeRateDesc');
  const expenseDaySelector = document.getElementById('expenseDaySelector');
  const categoryGrid = document.getElementById('categoryGrid');
  const payMethodGroup = document.getElementById('payMethodGroup');
  const settleTargetGroup = document.getElementById('settleTargetGroup');
  const memoInput = document.getElementById('expenseMemo');
  const btnSaveExpense = document.getElementById('btnSaveExpense');
  const btnClearHistory = document.getElementById('btnClearHistory');

  if (!amountInput || !btnSaveExpense) return;

  // LocalStorage에서 기존 지출 내역 불러오기
  try {
    const saved = localStorage.getItem(EXPENSES_STORAGE_KEY);
    if (saved) {
      travelExpenses = JSON.parse(saved);
      // 기존 내역 중 day 없는 데이터 기본값 보정
      travelExpenses.forEach(e => {
        if (!e.day) e.day = 1;
      });
    }
  } catch (e) {
    console.warn('LocalStorage 로드 중 오류:', e);
    travelExpenses = [];
  }

  // 0. 여행 일자(Day 1 ~ Day 8) 선택 리스너
  if (expenseDaySelector) {
    expenseDaySelector.querySelectorAll('.day-select-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const d = parseInt(chip.getAttribute('data-day'));
        updateExpenseSelectedDayView(d);
      });
    });
  }
  updateExpenseSelectedDayView(currentDay || 1);

  renderExpenseHistory();

  // 1. 통화 전환 토글 (CHF 기본값)
  let activeCurrency = 'CHF';
  if (currencyToggle) {
    const currBtns = currencyToggle.querySelectorAll('.curr-toggle-btn');
    currBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        currBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCurrency = btn.getAttribute('data-curr') || 'CHF';

        if (amountSymbol) {
          amountSymbol.textContent = activeCurrency;
        }

        if (exchangeRateDesc) {
          if (activeCurrency === 'CHF') {
            exchangeRateDesc.textContent = `(1 CHF ≈ ${CHF_KRW_RATE.toLocaleString()}원 기준)`;
          } else {
            exchangeRateDesc.textContent = `(1,000원 ≈ ${(1000 / CHF_KRW_RATE).toFixed(2)} CHF 기준)`;
          }
        }
        updateExchangePreview();
      });
    });
  }

  // 실시간 환산 계산 & 지우기(X) 버튼 토글
  function updateExchangePreview() {
    const val = parseFloat(amountInput.value);
    if (isNaN(val) || val <= 0) {
      if (exchangeCalcResult) {
        exchangeCalcResult.textContent = activeCurrency === 'CHF' ? '0 원' : '0.00 CHF';
      }
      if (btnClearAmount) btnClearAmount.style.display = 'none';
      return;
    }

    if (btnClearAmount) btnClearAmount.style.display = 'flex';

    if (exchangeCalcResult) {
      if (activeCurrency === 'CHF') {
        const krw = Math.round(val * CHF_KRW_RATE);
        exchangeCalcResult.textContent = `${krw.toLocaleString()} 원`;
      } else {
        const chf = (val / CHF_KRW_RATE).toFixed(2);
        exchangeCalcResult.textContent = `${chf} CHF`;
      }
    }
  }

  amountInput.addEventListener('input', updateExchangePreview);

  if (btnClearAmount) {
    btnClearAmount.addEventListener('click', () => {
      amountInput.value = '';
      updateExchangePreview();
      amountInput.focus();
    });
  }

  // 2. 카테고리 6구 아이콘 칩 선택
  let selectedCategory = {
    cat: 'food',
    name: '식비 / 쿱·마그로',
    icon: '🍽️'
  };

  if (categoryGrid) {
    const catChips = categoryGrid.querySelectorAll('.cat-chip');
    catChips.forEach(chip => {
      chip.addEventListener('click', () => {
        catChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const iconEl = chip.querySelector('.cat-icon');
        selectedCategory = {
          cat: chip.getAttribute('data-cat') || 'food',
          name: chip.getAttribute('data-name') || '식비',
          icon: iconEl ? iconEl.textContent.trim() : '🍽️'
        };
      });
    });
  }

  // 3. 결제 수단 (카드 vs 현금)
  let selectedPayMethod = 'card';
  if (payMethodGroup) {
    const payBtns = payMethodGroup.querySelectorAll('.seg-btn');
    payBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        payBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedPayMethod = btn.getAttribute('data-pay') || 'card';
      });
    });
  }

  // 3. 정산 대상 (공금 vs 개인 - 기본값 공금)
  let selectedSettleTarget = 'shared';
  if (settleTargetGroup) {
    const settleBtns = settleTargetGroup.querySelectorAll('.seg-btn');
    settleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        settleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSettleTarget = btn.getAttribute('data-settle') || 'shared';
      });
    });
  }

  // 5. 하단 고정 지출 저장하기 버튼 클릭 이벤트
  btnSaveExpense.addEventListener('click', () => {
    const rawVal = parseFloat(amountInput.value);
    if (isNaN(rawVal) || rawVal <= 0) {
      showToast('⚠️ 지출 금액을 먼저 입력해 주세요.');
      amountInput.focus();
      return;
    }

    const memoText = memoInput.value.trim();
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const dateStr = `${now.getMonth() + 1}/${now.getDate()}`;

    // 환산 보정값
    let amountChf = 0;
    let amountKrw = 0;
    if (activeCurrency === 'CHF') {
      amountChf = rawVal;
      amountKrw = Math.round(rawVal * CHF_KRW_RATE);
    } else {
      amountKrw = Math.round(rawVal);
      amountChf = parseFloat((rawVal / CHF_KRW_RATE).toFixed(2));
    }

    const dayInfo = TRIP_DAYS_INFO.find(d => d.day === selectedExpenseDay) || TRIP_DAYS_INFO[0];

    const newExpense = {
      id: 'exp_' + Date.now(),
      day: selectedExpenseDay,
      dayDateStr: dayInfo.dateStr,
      amount: rawVal,
      currency: activeCurrency,
      amountChf,
      amountKrw,
      category: selectedCategory.cat,
      categoryName: selectedCategory.name,
      categoryIcon: selectedCategory.icon,
      payMethod: selectedPayMethod,
      payMethodName: selectedPayMethod === 'card' ? '카드' : '현금',
      settleTarget: selectedSettleTarget,
      settleTargetName: selectedSettleTarget === 'shared' ? '공금' : '개인',
      memo: memoText || selectedCategory.name,
      time: timeStr,
      dateStr: dateStr,
      timestamp: Date.now()
    };

    // 로컬 목록에 추가 및 저장
    travelExpenses.unshift(newExpense);
    saveExpensesToStorage();
    renderExpenseHistory();

    // 입력 폼 초기화
    amountInput.value = '';
    memoInput.value = '';
    updateExchangePreview();

    // 피드백 토스트 알림
    const formattedAmount = activeCurrency === 'CHF' 
      ? `${rawVal.toFixed(2)} CHF` 
      : `${rawVal.toLocaleString()} 원`;
    showToast(`✅ [Day ${selectedExpenseDay}] ${formattedAmount} (${newExpense.settleTargetName}/${newExpense.categoryName}) 저장 완료!`);

    // Firestore 클라우드 동기화 (가능한 경우)
    if (db) {
      try {
        db.collection('expenses').doc(newExpense.id).set(newExpense)
          .catch(err => console.log('Firestore 지출 동기화 안내:', err.message));
      } catch (e) {}
    }

    // 다음 입력을 위해 다시 커서 포커스
    setTimeout(() => {
      amountInput.focus();
    }, 120);
  });

  // 전체 내역 초기화 버튼
  if (btnClearHistory) {
    btnClearHistory.addEventListener('click', () => {
      if (travelExpenses.length === 0) {
        showToast('삭제할 지출 내역이 없습니다.');
        return;
      }
      if (confirm('스위스 여행 저장된 모든 지출 내역을 삭제하시겠습니까?')) {
        travelExpenses = [];
        saveExpensesToStorage();
        renderExpenseHistory();
        showToast('모든 지출 내역이 초기화되었습니다.');
      }
    });
  }

  // Firestore 실시간 동기화 리스너
  if (db) {
    try {
      db.collection('expenses').orderBy('timestamp', 'desc').limit(100).onSnapshot(snapshot => {
        if (!snapshot.empty) {
          const cloudList = [];
          snapshot.forEach(doc => cloudList.push(doc.data()));
          if (cloudList.length > 0) {
            travelExpenses = cloudList;
            travelExpenses.forEach(e => { if (!e.day) e.day = 1; });
            saveExpensesToStorage();
            renderExpenseHistory();
          }
        }
      }, err => {
        console.warn('Firestore expenses listener note:', err.message);
      });
    } catch (e) {}
  }
}

function saveExpensesToStorage() {
  try {
    localStorage.setItem(EXPENSES_STORAGE_KEY, JSON.stringify(travelExpenses));
  } catch (e) {
    console.warn('LocalStorage 저장 오류:', e);
  }
}

function renderExpenseHistory() {
  const grandCumulChfEl = document.getElementById('grandCumulChf');
  const grandCumulKrwEl = document.getElementById('grandCumulKrw');
  const grandSharedChfEl = document.getElementById('grandSharedChf');
  const grandPersonalChfEl = document.getElementById('grandPersonalChf');
  const dailyCardsContainer = document.getElementById('dailyCardsContainer');

  if (!dailyCardsContainer) return;

  // 1) 전체 7박 8일 총합 계산
  let grandTotalChf = 0;
  let grandTotalKrw = 0;
  let grandSharedChf = 0;
  let grandPersonalChf = 0;

  travelExpenses.forEach(item => {
    const chf = Number(item.amountChf) || 0;
    const krw = Number(item.amountKrw) || 0;
    grandTotalChf += chf;
    grandTotalKrw += krw;
    if (item.settleTarget === 'shared') {
      grandSharedChf += chf;
    } else {
      grandPersonalChf += chf;
    }
  });

  if (grandCumulChfEl) grandCumulChfEl.textContent = `${grandTotalChf.toFixed(2)} CHF`;
  if (grandCumulKrwEl) grandCumulKrwEl.textContent = `≈ ${Math.round(grandTotalKrw).toLocaleString()}원`;
  if (grandSharedChfEl) grandSharedChfEl.textContent = `${grandSharedChf.toFixed(2)} CHF`;
  if (grandPersonalChfEl) grandPersonalChfEl.textContent = `${grandPersonalChf.toFixed(2)} CHF`;

  // 2) Day 1 ~ Day 8 일자별 지출 & 누적 합계 계산
  let runningCumulChf = 0;
  let runningCumulKrw = 0;

  dailyCardsContainer.innerHTML = TRIP_DAYS_INFO.map(dayInfo => {
    const dayItems = travelExpenses.filter(e => (e.day || 1) === dayInfo.day);
    let dayChf = 0;
    let dayKrw = 0;
    let daySharedChf = 0;
    let dayPersonalChf = 0;

    dayItems.forEach(item => {
      const chf = Number(item.amountChf) || 0;
      const krw = Number(item.amountKrw) || 0;
      dayChf += chf;
      dayKrw += krw;
      if (item.settleTarget === 'shared') {
        daySharedChf += chf;
      } else {
        dayPersonalChf += chf;
      }
    });

    // 누적 합계 집계
    runningCumulChf += dayChf;
    runningCumulKrw += dayKrw;

    const hasExpenses = dayItems.length > 0;
    const isCurrent = dayInfo.day === currentDay;
    const isOpen = isCurrent || hasExpenses; // 활성 Day이거나 지출이 있으면 펼쳐둠

    const formattedDayAmt = dayChf > 0 
      ? `${dayChf.toFixed(2)} CHF` 
      : '0.00 CHF';

    const formattedCumulAmt = `${runningCumulChf.toFixed(2)} CHF`;

    const itemsHtml = dayItems.map(item => {
      const formattedVal = item.currency === 'CHF' 
        ? `${parseFloat(item.amount).toFixed(2)} CHF` 
        : `${Math.round(item.amount).toLocaleString()} 원`;

      const settleBadge = item.settleTarget === 'shared' ? '👥공금' : '👤개인';
      const payBadge = item.payMethod === 'card' ? '💳카드' : '💵현금';

      return `
        <div class="history-item" data-id="${item.id}">
          <div class="history-item-left">
            <span class="history-item-cat">${item.categoryIcon || '📦'}</span>
            <div class="history-item-info">
              <span class="history-item-title">${escapeHtml(item.memo || item.categoryName)}</span>
              <span class="history-item-meta">${item.time || ''} · ${settleBadge} · ${payBadge}</span>
            </div>
          </div>
          <div class="history-item-right">
            <span class="history-item-amount">${formattedVal}</span>
            <button type="button" class="history-item-del" data-id="${item.id}" title="삭제">&times;</button>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="daily-card ${hasExpenses ? 'has-expense' : ''} ${isCurrent ? 'is-current' : ''} ${isOpen ? 'open' : ''}" data-day="${dayInfo.day}">
        <div class="daily-card-summary-row">
          <div class="daily-left">
            <span class="daily-day-badge">DAY ${dayInfo.day}</span>
            <div class="daily-info">
              <span class="daily-info-title">${dayInfo.dateStr} · ${dayInfo.title}</span>
              <span class="daily-info-meta">${hasExpenses ? `지출 ${dayItems.length}건 등록됨` : '지출 내역 없음'}</span>
            </div>
          </div>
          <div class="daily-right">
            <span class="daily-today-amt ${dayChf === 0 ? 'zero' : ''}">${formattedDayAmt}</span>
            <span class="daily-cumul-badge" title="Day 1부터 Day ${dayInfo.day}까지 누적 합계">
              Day ${dayInfo.day}까지 누적: ${formattedCumulAmt}
            </span>
          </div>
          <span class="daily-chevron">▾</span>
        </div>
        <div class="daily-items-panel">
          ${hasExpenses ? `
            <div class="daily-split-summary">
              <span>👥 공금: <strong>${daySharedChf.toFixed(2)} CHF</strong></span>
              <span>👤 개인: <strong>${dayPersonalChf.toFixed(2)} CHF</strong></span>
            </div>
            <div class="daily-items-list">
              ${itemsHtml}
            </div>
          ` : `
            <div class="daily-empty-msg">이 날짜에 등록된 지출 내역이 없습니다.</div>
          `}
        </div>
      </div>
    `;
  }).join('');

  // 아코디언 펼침/접힘 토글 리스너
  dailyCardsContainer.querySelectorAll('.daily-card-summary-row').forEach(row => {
    row.addEventListener('click', () => {
      const card = row.closest('.daily-card');
      if (card) {
        card.classList.toggle('open');
      }
    });
  });

  // 개별 항목 삭제 버튼 리스너
  dailyCardsContainer.querySelectorAll('.history-item-del').forEach(delBtn => {
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = delBtn.getAttribute('data-id');
      deleteExpenseItem(id);
    });
  });

  // 메인 배너의 지출 뱃지도 실시간 업데이트
  const currentBannerBadge = document.getElementById('btnBannerDayExpense');
  if (currentBannerBadge) {
    const curExp = travelExpenses.filter(e => (e.day || 1) === currentDay);
    const curChf = curExp.reduce((sum, e) => sum + (Number(e.amountChf) || 0), 0);
    if (curChf > 0) {
      currentBannerBadge.className = 'day-expense-trigger-pill';
      currentBannerBadge.textContent = `💳 Day ${currentDay} 지출: ${curChf.toFixed(2)} CHF`;
    } else {
      currentBannerBadge.className = 'day-expense-trigger-pill empty';
      currentBannerBadge.textContent = `💳 + Day ${currentDay} 지출 기록`;
    }
  }
}

function deleteExpenseItem(id) {
  travelExpenses = travelExpenses.filter(item => item.id !== id);
  saveExpensesToStorage();
  renderExpenseHistory();
  showToast('지출 내역 1건이 삭제되었습니다.');

  if (db) {
    try {
      db.collection('expenses').doc(id).delete()
        .catch(err => console.log('Firestore 삭제 안내:', err.message));
    } catch (e) {}
  }
}

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Start
document.addEventListener('DOMContentLoaded', initApp);

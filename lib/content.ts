export type LinkItem = {
  label: string;
  href: string;
};

export type Person = {
  name: string;
  role: string;
  image: string;
  area?: string;
};

export type Ministry = {
  slug: "youth" | "choir" | "edavaka-mission" | "sevika-sangham";
  name: string;
  short: string;
  image: string;
  description: string;
  rhythm: string;
  focus: string[];
};

export type EventItem = {
  title: string;
  dateLabel: string;
  summary: string;
  location: string;
  image?: string;
};

export const site = {
  name: "Salem Mar Thoma Church Southampton",
  shortName: "Salem Mar Thoma Church",
  email: "salemmtcsouthampton@gmail.com",
  serviceTimes: [
    "Holy Qurbana - 2nd Saturday, 9:45 am",
    "Holy Qurbana - 4th Sunday, 2:45 pm",
    "Ordinary Service - 1st and 3rd Sunday, 3:00 pm"
  ],
  prayerRhythm: "Area-wise prayer meeting on the 1st and 3rd Friday of every month from 7:00 pm.",
  summary:
    "Salem Mar Thoma Church Southampton is a worshipping Malayalee Christian community rooted in prayer, Holy Qurbana, fellowship, and service in the wider Southampton region.",
  social: [
    { label: "Facebook", href: "https://www.facebook.com/salemmtcsouthampton" },
    { label: "Instagram", href: "https://www.instagram.com/salemmtcuk/" },
    { label: "YouTube", href: "https://www.youtube.com/@SalemMTC" },
    { label: "X", href: "https://x.com/SalemMTCUK" }
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Calendar", href: "/calendar" },
    { label: "Ministries", href: "/ministries" },
    { label: "Leadership", href: "/leadership" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" }
  ] satisfies LinkItem[],
  footerLinks: [
    { label: "Membership Form", href: "/resources" },
    { label: "Mar Thoma Church UK", href: "https://www.marthomachurchuk.org/" }
  ] satisfies LinkItem[]
};

export const hero = {
  eyebrow: "Lighted to Lighten",
  title: "A premium digital home for a growing church family.",
  body:
    "We gather as part of the worldwide Mar Thoma Church for Holy Qurbana, prayer, Sunday School, and parish life shaped by the gospel of Jesus Christ.",
  image: "/church_hero_background.png",
  secondaryNote:
    "Our parish seeks to nurture faith, encourage families, support ministries, and welcome visitors into the worship and fellowship of the church."
};

export const marThomaChurch = {
  identity:
    "The Mar Thoma Syrian Church traces its heritage to the witness of Saint Thomas the Apostle and describes itself as Apostolic in origin, Biblical in faith, Ecumenical in outlook, Oriental in worship, Democratic in function, and Episcopal in character.",
  worship:
    "Mar Thoma worship gives prime importance to prayer, scripture, congregational participation, and Holy Qurbana. Alongside Holy Communion, the Church also gathers for ordinary worship, intercession, preaching, thanksgiving, and fellowship.",
  parish:
    "Salem Mar Thoma Church Southampton serves families and individuals across the region through regular worship, area prayer meetings, Sunday School, pastoral care, and ministry life for all ages."
};

export const homepageHighlights = [
  {
    title: "Plan a First Visit",
    description: "See service rhythm, what to expect, and how to get in touch without digging through the site."
  },
  {
    title: "Find Church Life",
    description: "Explore Youth Fellowship, Choir, Edavaka Mission, Sevika Sangham, Sunday School, and parish rhythms."
  },
  {
    title: "Stay In Step",
    description: "Use a polished events page that can later connect directly to Google Calendar."
  }
];

export const ministries: Ministry[] = [
  {
    slug: "youth",
    name: "Youth Fellowship",
    short: "Faith, friendship, mentoring, and participation for young people and teenagers.",
    image: "/images/Church Photos/VBS.jpg",
    description:
      "Youth Fellowship is positioned as a meaningful pathway for younger members to grow spiritually, build friendships, and take an active part in church life.",
    rhythm:
      "This space can include fellowship after worship, discussions, retreats, mentoring, and opportunities for young people to contribute to the parish with confidence.",
    focus: ["Teen and young adult belonging", "Faith formation", "Retreats and fellowship", "Leadership development"]
  },
  {
    slug: "edavaka-mission",
    name: "Edavaka Mission",
    short: "Prayer, outreach, parish support, and mission-minded service.",
    image: "/images/Front Page Thumbnails/Bournemouth Edavaka Prayer.jpeg",
    description:
      "Edavaka Mission gives structure to the church’s outward-facing care through prayer, outreach, and support for people across the parish.",
    rhythm:
      "Its rhythm can include area prayer support, community initiatives, visiting, and practical expressions of service that connect faith with action.",
    focus: ["Outreach and care", "Prayer gatherings", "Family support", "Parish service projects"]
  },
  {
    slug: "choir",
    name: "Choir",
    short: "A ministry of reverence, beauty, and musical preparation for worship.",
    image: "/images/Church Photos/Choir.jpg",
    description:
      "The choir enriches worship through careful preparation, musical discipline, and a ministry approach that supports the liturgical life of the church.",
    rhythm:
      "Rehearsals and service preparation create a steady rhythm for regular worship, feast days, and special gatherings throughout the year.",
    focus: ["Liturgical music", "Seasonal celebrations", "Practice and formation", "Worship support"]
  },
  {
    slug: "sevika-sangham",
    name: "Sevika Sangham",
    short: "Prayerful fellowship and encouragement for women in the parish.",
    image: "/images/Church Photos/Sevika.jpg",
    description:
      "Sevika Sangham creates a space for women to gather in prayer, mutual encouragement, and practical service within the life of the church.",
    rhythm:
      "Its gatherings can support spiritual formation, relationships across families, and church life through service, prayer, and hospitality.",
    focus: ["Women's fellowship", "Prayer support", "Service and encouragement", "Shared spiritual growth"]
  }
];

export const leaders = {
  clergy: [
    { name: "Rev. Subin Mathew Parayil", role: "Vicar", image: "/images/team/Subin Mathew.webp" }
  ] satisfies Person[],
  executive: [
    { name: "Sam Thomas", role: "Vice President", image: "/images/team/Sam Thomas.png" },
    { name: "Joby John", role: "Secretary", image: "/images/team/Joby John.png" },
    { name: "Dijo John", role: "Trustee (Finance)", image: "/images/team/Dijo John.png" },
    { name: "Anish Babu", role: "Trustee (Accountant)", image: "/images/team/Anish Babu.png" },
    { name: "Chesvin Chacko", role: "Lay Ministrant", image: "/images/team/Chesvin Chako.webp" },
    { name: "Sujin Varghese", role: "Lay Ministrant", image: "/images/team/Sujin Varghese.png" },
    { name: "Biby Mathews", role: "Diocese Assembly Member and Choir Master", image: "/images/team/Biby Mathews.png" }
  ] satisfies Person[],
  ministryLeads: [
    { name: "Cibi Mathew", role: "Sunday School Headmaster", image: "/images/team/Cibi Mathew.png" },
    { name: "Sheena Susan", role: "Sevika Sangham", image: "/images/team/Sheena Susan.png" },
    { name: "Ann Marium Mammen", role: "Youth Fellowship", image: "/images/team/Ann Marium.png" },
    { name: "Babu Thomas", role: "Edavaka Mission", image: "/images/team/Babu Thomas.png" }
  ] satisfies Person[],
  areaRepresentatives: [
    {
      name: "Ninesh John Abraham",
      role: "Area Representative",
      area: "Bournemouth, Poole, New Milton and Lymington",
      image: "/images/team/Ninesh John Abraham.png"
    },
    {
      name: "Joji Varghese",
      role: "Area Representative",
      area: "Portsmouth, Fareham and Petersfield",
      image: "/images/team/Joji Varghese.png"
    },
    {
      name: "Lalu Thomas",
      role: "Area Representative",
      area: "Southampton, Eastleigh, Winchester, Andover and Salisbury",
      image: "/images/team/Lalu Thomas.png"
    },
    {
      name: "Sam John",
      role: "Area Representative",
      area: "Worthing, Littlehampton and Chichester",
      image: "/images/team/Sam John.png"
    }
  ] satisfies Person[]
};

export const eventFeed: EventItem[] = [
  {
    title: "Holy Qurbana",
    dateLabel: "2nd Saturday • 9:45 am",
    summary: "Malayalam Holy Qurbana with worship, prayer, and fellowship.",
    location: "Southampton",
    image: "/images/Church Photos/DSC04240.jpg"
  },
  {
    title: "Holy Qurbana",
    dateLabel: "4th Sunday • 2:45 pm",
    summary: "Monthly Sunday worship gathering for families, visitors, and the wider congregation.",
    location: "Southampton",
    image: "/images/Front Page Thumbnails/Altar.jpeg"
  },
  {
    title: "Area Prayer Meeting",
    dateLabel: "1st & 3rd Friday • 7:00 pm",
    summary: "Area-wise prayer meetings across the parish for scripture, intercession, and care.",
    location: "Various parish areas",
    image: "/images/Church Photos/Prayer Meeting.jpg"
  },
  {
    title: "Choir Practice",
    dateLabel: "Regular rhythm",
    summary: "Choir preparation held online and in person to support worship and festival services.",
    location: "Hybrid",
    image: "/images/Front Page Thumbnails/PHOTO-2024-12-21-15-25-09.jpg"
  },
  {
    title: "Youth Fellowship",
    dateLabel: "After service",
    summary: "Youth and teenage fellowship focused on belonging, discussion, and faith formation.",
    location: "Church community",
    image: "/images/Church Photos/1.jpeg"
  },
  {
    title: "Sunday School",
    dateLabel: "Weekly rhythm",
    summary: "Sunday School held before the service for children and families.",
    location: "Church community",
    image: "/images/Church Photos/VBS.jpg"
  }
];

export const galleryCollections = [
  {
    title: "First Midlands Centre Meeting",
    description:
      "Members from across the region came together for worship, prayer, and fellowship, marking a new chapter in the life of the community.",
    image: "/images/Front Page Thumbnails/Edavaka.jpg",
    href: "https://610445.lightfolio.com/gallery/first-midlands-centre-meeting",
    cta: "Open Gallery"
  },
  {
    title: "VBS 2025",
    description: "A lively visual record of Vacation Bible School days, children’s participation, and shared celebration.",
    image: "/images/Front Page Thumbnails/Day 3.jpg",
    href: "https://174837.lightfolio.com/gallery/salem-mar-thoma-church-vbs-2025-day-3",
    cta: "View Photos"
  },
  {
    title: "Christmas Carol Service 2024",
    description: "Choir-led carols and Christmas celebration captured in a dedicated video playlist.",
    image: "/images/Front Page Thumbnails/Gotohim.jpg",
    href: "https://www.youtube.com/playlist?list=PLHFGh4XtxmTuhrr71jNOuL9dTZTH1zmCC",
    cta: "Watch Videos"
  },
  {
    title: "Sacred Spaces",
    description: "A visual meditation on the beauty, light, and liturgical details of our sanctuary and place of worship.",
    image: "/images/Church Photos/cc9b6c804fa93486d37b8987367c0464.jpg",
    href: "/gallery",
    cta: "View Interior"
  },
  {
    title: "Sevika Sangham Day Out",
    description: "Shared fellowship and community memories from a dedicated women’s gathering.",
    image: "/images/Front Page Thumbnails/9lgrNr4hSTCT1by73JzOjA.jpg",
    href: "#",
    cta: "Album Coming Soon"
  }
];

export const formResource = {
  title: "Church Membership Form",
  description:
    "Please download the membership application form, complete all required fields, and submit it to the vicar for processing.",
  href: "https://drive.google.com/file/d/11A83MqkKkH6VsW2Tgty6GUeZHv7vY1el/view",
  instructions:
    "After completing the form, submit it to Rev. Subin Mathew together with any supporting documents. Submission can happen in person after service or by email."
};

export const calendar = {
  publicCalendarId: "salemmtcwebsite@gmail.com",
  publicEmbed:
    "https://calendar.google.com/calendar/embed?src=salemmtcwebsite%40gmail.com&ctz=Europe%2FLondon",
  publicIcs:
    "https://calendar.google.com/calendar/ical/salemmtcwebsite%40gmail.com/public/basic.ics",
  embed:
    "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FLondon&bgcolor=%23ffffff&showTitle=0&showTz=0&showPrint=0&src=c2FsZW1tdGN3ZWJzaXRlQGdtYWlsLmNvbQ&color=%23039BE5",
  futureNote:
    "The events UI is structured so the cards can later be populated directly from the Google Calendar API or a small proxy endpoint."
};

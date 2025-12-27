"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "fr" | "ar"

const translations = {
  en: {
    // Header & Navigation
    promoMessage: "Get 15% off on your first order",
    home: "Home",
    shop: "Shop",
    about: "About",
    contact: "Contact",

    // Hero Section
    heroTitle: "Timeless Fashion for the Modern Wardrobe",
    heroSubtitle:
      "Discover timeless fashion for Men, Kids, and Perfumes – crafted for comfort, designed for confidence.",
    heroButton: "Explore the Collection",

    // New Arrivals
    newArrivalsTitle: "New Arrivals",
    newArrivalsSubtitle: "Be the first to wear this season's latest looks. Handpicked and freshly styled.",
    seeWhatsNew: "See What's New",

    // Categories
    categoriesTitle: "Our Categories",
    categoriesSubtitle: "Explore a wide range of styles, handpicked to suit every taste and need.",
    mensWear: "Men's Wear",
    perfumes: "Perfumes",
    kidsWear: "Kids Wear",
    accessories: "Accessories",
    shopNow: "Shop Now",

    // Bestsellers
    bestsellersTitle: "Bestsellers",
    bestsellersSubtitle: "From cult-favorite jackets to must-have dresses – These are our customer faves.",

    // Exclusive Jacket
    exclusiveJacketTitle: "The Exclusive Jackets - Starting at just $40",
    exclusiveJacketDescription:
      "Crafted for comfort, designed for impact — this is the outerwear piece that's redefining everyday style.",
    shopExclusiveJacket: "Shop the Exclusive Jacket",

    // Summer Sale
    summerSaleTitle: "Hurry Up! Get Up to 50% Off",
    summerSaleSubtitle: "Step into summer with sun-ready styles at can't-miss prices.",
    shopSummerSale: "Shop the Summer Sale",
    day: "DAY",
    hours: "HOURS",
    mins: "MINS",
    sec: "SEC",

    // Testimonials
    testimonialsTitle: "What Our Shoppers Say",
    testimonialsSubtitle: "Store that nails fashion and comfort.",
    testimonial1Quote:
      "Velora has completely transformed how I shop for clothes. Every piece feels thoughtfully designed and incredibly comfortable.",
    testimonial1Author: "Jessica M.",
    testimonial1Location: "San Diego",
    testimonial2Quote: "I'm always looking for clean, versatile styles. The craftsmanship is outstanding.",
    testimonial2Author: "Darren L.",
    testimonial2Location: "New York",
    testimonial3Quote: "Shopping for myself and my daughter is now so easy. Stylish and built to last!",
    testimonial3Author: "Michelle T.",
    testimonial3Location: "Chicago",

    // How It Works
    howItWorksTitle: "How It Works",
    howItWorksSubtitle: "Just Pick, Pack and Ship",
    step1Title: "Shop Styles",
    step1Description: "Browse our curated collections for Men, Kids, Perfumes & Accessories.",
    step2Title: "Pick Your Fit",
    step2Description: "Find your perfect size with our detailed fit guides.",
    step3Title: "Checkout Fast",
    step3Description: "Enjoy a quick and secure checkout with flexible payment options.",

    // Newsletter
    newsletterTitle: "Get 10% Off on Your First Order",
    newsletterSubtitle: "Plus exclusive access to product drops, style tips, and insider deals.",
    newsletterPlaceholder: "Enter your email",
    enterEmailPlaceholder: "ENTER YOUR EMAIL *",
    subscribe: "Subscribe",

    // Footer
    followUs: "Follow us",
    freeDelivery: "Free Standard Delivery",
    freeDeliveryDesc: "On all Orders Over $100",
    quickDelivery: "Quick Delivery",
    quickDeliveryDesc: "Delivery within 3 Days across US",
    securePayments: "Secure Payments",
    securePaymentsDesc: "Secure Payment Methods",
    topRatedService: "Top Rated Customer Service",
    topRatedServiceDesc: "Quick Responses & Solutions",
    footerDescription: "Timeless fashion for the modern wardrobe.",
    company: "Company",
    careers: "Careers",
    blog: "Blog",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    returns: "Returns & Refunds",
    allRightsReserved: "All rights reserved.",

    // Product
    sale: "Sale",
    selectOptions: "Select Options",

    // Contact Page
    contactUsTitle: "Contact Us",
    contactUsSubtitle:
      "Have a question about your order, sizing, shipping, or just want to say hello? Our team at Velora is always happy to hear from you.",
    sendUsMessage: "Send Us Message",
    namePlaceholder: "Name *",
    emailPlaceholder: "Email *",
    commentPlaceholder: "Comment *",
    saveInfo: "Save my name, email and website in this browser",
    send: "Send",
    email: "Email",
    phone: "Phone",
    address: "Address",
    exploreSupportTopics: "Explore Our Support Topics",
    supportTopicsSubtitle:
      "From returns and shipping to size and payments, we've got answers to all your most common questions.",
    returnsExchanges: "Returns & Exchanges",
    returnsExchangesLink: "Returns & Exchanges",
    howToStartReturn: "How to Start a Return",
    checkRefundStatus: "Check Refund Status",
    orderingPayment: "Ordering & Payment",
    aboutCancelOrder: "About vs Cancel an Order",
    editOrderAfter: "Edit order after",
    paymentMethods: "Payment Methods",
    shippingDelivery: "Shipping & Delivery",
    trackDeliveryCosts: "Track/Delivery & Costs",
    estimatedDeliveryTimes: "Estimated Delivery Times",
    freeShipDeals: "Free Ship Deals",
    productInformation: "Product Information",
    sizeGuides: "Size Guides",
    careInstructions: "Care Instructions",
    availabilityAlerts: "Availability & Alerts",
    accountPrivacy: "Account & Privacy",
    signUpAccount: "Sign Up / Create Account",
    managePersonalData: "Manage Personal Data",
    cookiePolicy: "Cookie Policy",
    sizingFit: "Sizing & Fit",
    chooseSizes: "Choose Sizes",
    fitRecommendations: "Fit Recommendations",
    productMeasurements: "Product Measurements",

    // About Page
    aboutHeroTitle: "Style That Moves With You",
    aboutHeroHighlight: "Born from a passion",
    aboutHeroSubtitle: "for timeless design and everyday comfort",
    ourPurposeTitle: "Our Purpose, Your Style",
    ourPurposeSubtitle1: "At Velora, everything we create starts with you",
    ourPurposeHighlight: "your lifestyle, your confidence,",
    ourPurposeSubtitle2: "and your need for fashion that truly fits.",
    ourMissionTitle: "Our Mission",
    ourMissionText:
      "To create timeless, high-quality fashion that blends comfort with confidence. We're here to empower individuals of all ages with versatile, inclusive, and made to fit smart-fit designs with a purpose, craft with care, and always put people first.",
    ourVisionTitle: "Our Vision",
    ourVisionText:
      "To become a trusted, global fashion destination that redefines the way people shop, style, and express themselves. Our self-expression is celebrated, and fashion stays effortless for everyone – from our showys in family moments. At Velora, we aim to lead with creativity, integrity, and a deep understanding.",
    whatMakesUsTitle: "What Makes Velora Stand Out",
    whatMakesUsHighlight: "Style, Comfort & More",
    whatMakesUsSubtitle: "- Here's Why You'll Love Us.",
    premiumQualityTitle: "Premium Quality",
    premiumQualityText: "We don't settle for less using only durable fabrics designed to hold and feel amazing.",
    timelessStyleTitle: "Timeless Style",
    timelessStyleText: "Clean silhouettes and versatile pieces you can mix, match, and style your way.",
    inHouseDesignTitle: "In-House Design",
    inHouseDesignText: "Every detail is designed by our in-house design team to bring you stylish clothes.",
    customerFirstTitle: "Customer First",
    customerFirstText: "Inclusive fits and sizes designed to reflect all shapes, and sizes, and people.",
    aboutNewsletterSubtitle: "Plus exclusive access to product drops, style tips, and insider deals.",
    followUsOn: "Follow us on",
    passionLabel: "Passion",
    moreThanClothingTitle: "More Than Just Clothing",
    moreThanClothingText1:
      "At Velora, we believe fashion should be as good as the life you're living. Whether you're dressing up for everyday or gearing for the perfect outfit that works with your vibe with your lifestyle, and elevate your wardrobe — effortlessly.",
    moreThanClothingText2:
      "Whether you're dressing up for everyday or down for the everyday, our collections are made to help you style your story with confidence and ease — so you don't have to.",
    thoughtfullyDesignedTitle: "Thoughtfully Designed for All",
    thoughtfullyDesignedText:
      "Our range covers Men, Kids, and Perfumes, with each piece carefully crafted to combine form, function, and feeling. From the perfect polo to the softest loungewear and statement outerwear, everything at Velora is designed with real life in mind — easy to wear, easy to love. We also believe in the power of details. That's why we obsess over fit, fabric, and finish — so you don't have to.",

    welcomeBack: "Welcome Back",
    createAccount: "Create Account",
    loginSubtitle: "Sign in to access your account and orders",
    signupSubtitle: "Join Velora for exclusive benefits",
    login: "Login",
    signup: "Sign Up",
    password: "Password",
    forgotPassword: "Forgot password?",
    loginButton: "Sign In",
    signupButton: "Create Account",
    fullName: "Full Name",
    confirmPassword: "Confirm Password",
    orContinueWith: "or continue with",
    termsText: "By continuing, you agree to our Terms of Service and Privacy Policy.",
  },

  fr: {
    // Header & Navigation
    promoMessage: "Obtenez 15% de réduction sur votre première commande",
    home: "Accueil",
    shop: "Boutique",
    about: "À propos",
    contact: "Contact",

    // Hero Section
    heroTitle: "Mode Intemporelle pour la Garde-Robe Moderne",
    heroSubtitle:
      "Découvrez une mode intemporelle pour Hommes, Enfants et Parfums – conçue pour le confort, pensée pour la confiance.",
    heroButton: "Explorer la Collection",

    // New Arrivals
    newArrivalsTitle: "Nouveautés",
    newArrivalsSubtitle:
      "Soyez les premiers à porter les derniers looks de la saison. Sélectionnés avec soin et fraîchement stylés.",
    seeWhatsNew: "Voir les Nouveautés",

    // Categories
    categoriesTitle: "Nos Catégories",
    categoriesSubtitle: "Explorez une large gamme de styles, sélectionnés pour tous les goûts et besoins.",
    mensWear: "Vêtements Homme",
    perfumes: "Parfums",
    kidsWear: "Vêtements Enfant",
    accessories: "Accessoires",
    shopNow: "Acheter Maintenant",

    // Bestsellers
    bestsellersTitle: "Meilleures Ventes",
    bestsellersSubtitle: "Des vestes cultes aux robes incontournables – Ce sont les favoris de nos clients.",

    // Exclusive Jacket
    exclusiveJacketTitle: "Les Vestes Exclusives - À partir de 40$",
    exclusiveJacketDescription:
      "Conçues pour le confort, pensées pour l'impact – la pièce de vêtement qui redéfinit le style quotidien.",
    shopExclusiveJacket: "Acheter la Veste Exclusive",

    // Summer Sale
    summerSaleTitle: "Dépêchez-vous! Jusqu'à 50% de Réduction",
    summerSaleSubtitle: "Entrez dans l'été avec des styles ensoleillés à des prix imbattables.",
    shopSummerSale: "Acheter les Soldes d'Été",
    day: "JOUR",
    hours: "HEURES",
    mins: "MINS",
    sec: "SEC",

    // Testimonials
    testimonialsTitle: "Ce que Disent Nos Clients",
    testimonialsSubtitle: "Une boutique qui maîtrise mode et confort.",
    testimonial1Quote:
      "Velora a complètement transformé ma façon d'acheter des vêtements. Chaque pièce est confortable.",
    testimonial1Author: "Jessica M.",
    testimonial1Location: "San Diego",
    testimonial2Quote: "Je cherche toujours des styles propres et polyvalents. Le savoir-faire est exceptionnel.",
    testimonial2Author: "Darren L.",
    testimonial2Location: "New York",
    testimonial3Quote: "Faire du shopping pour moi et ma fille est maintenant si facile. Élégant et durable!",
    testimonial3Author: "Michelle T.",
    testimonial3Location: "Chicago",

    // How It Works
    howItWorksTitle: "Comment Ça Marche",
    howItWorksSubtitle: "Choisir, Emballer et Expédier",
    step1Title: "Parcourir les Styles",
    step1Description: "Parcourez nos collections pour Hommes, Enfants, Parfums et Accessoires.",
    step2Title: "Choisir Votre Taille",
    step2Description: "Trouvez votre taille parfaite avec nos guides détaillés.",
    step3Title: "Paiement Rapide",
    step3Description: "Profitez d'un paiement rapide et sécurisé avec des options flexibles.",

    // Newsletter
    newsletterTitle: "Obtenez 10% de Réduction sur Votre Première Commande",
    newsletterSubtitle: "Plus un accès exclusif aux nouveautés, conseils de style et offres privilégiées.",
    newsletterPlaceholder: "Entrez votre email",
    enterEmailPlaceholder: "ENTREZ VOTRE EMAIL *",
    subscribe: "S'abonner",

    // Footer
    followUs: "Suivez-nous",
    freeDelivery: "Livraison Standard Gratuite",
    freeDeliveryDesc: "Sur toutes les commandes de plus de 100$",
    quickDelivery: "Livraison Rapide",
    quickDeliveryDesc: "Livraison sous 3 jours aux États-Unis",
    securePayments: "Paiements Sécurisés",
    securePaymentsDesc: "Méthodes de paiement sécurisées",
    topRatedService: "Service Client de Premier Ordre",
    topRatedServiceDesc: "Réponses et Solutions Rapides",
    footerDescription: "Mode intemporelle pour la garde-robe moderne.",
    company: "Entreprise",
    careers: "Carrières",
    blog: "Blog",
    legal: "Juridique",
    privacy: "Politique de Confidentialité",
    terms: "Conditions d'Utilisation",
    returns: "Retours et Remboursements",
    allRightsReserved: "Tous droits réservés.",

    // Product
    sale: "Solde",
    selectOptions: "Choisir les Options",

    // Contact Page
    contactUsTitle: "Contactez-nous",
    contactUsSubtitle:
      "Vous avez une question sur votre commande, la taille, l'expédition ou voulez simplement dire bonjour ? Notre équipe Velora est toujours heureuse de vous entendre.",
    sendUsMessage: "Envoyez-nous un Message",
    namePlaceholder: "Nom *",
    emailPlaceholder: "Email *",
    commentPlaceholder: "Commentaire *",
    saveInfo: "Enregistrer mon nom, email et site web dans ce navigateur",
    send: "Envoyer",
    email: "Email",
    phone: "Téléphone",
    address: "Adresse",
    exploreSupportTopics: "Explorer nos Sujets d'Assistance",
    supportTopicsSubtitle:
      "Des retours et expéditions aux tailles et paiements, nous avons des réponses à toutes vos questions courantes.",
    returnsExchanges: "Retours et Échanges",
    returnsExchangesLink: "Retours et Échanges",
    howToStartReturn: "Comment Démarrer un Retour",
    checkRefundStatus: "Vérifier l'État du Remboursement",
    orderingPayment: "Commande et Paiement",
    aboutCancelOrder: "À Propos vs Annuler une Commande",
    editOrderAfter: "Modifier la commande après",
    paymentMethods: "Modes de Paiement",
    shippingDelivery: "Expédition et Livraison",
    trackDeliveryCosts: "Suivi/Livraison et Coûts",
    estimatedDeliveryTimes: "Délais de Livraison Estimés",
    freeShipDeals: "Offres de Livraison Gratuite",
    productInformation: "Informations Produit",
    sizeGuides: "Guides des Tailles",
    careInstructions: "Instructions d'Entretien",
    availabilityAlerts: "Disponibilité et Alertes",
    accountPrivacy: "Compte et Confidentialité",
    signUpAccount: "S'inscrire / Créer un Compte",
    managePersonalData: "Gérer les Données Personnelles",
    cookiePolicy: "Politique des Cookies",
    sizingFit: "Tailles et Ajustement",
    chooseSizes: "Choisir les Tailles",
    fitRecommendations: "Recommandations d'Ajustement",
    productMeasurements: "Mesures du Produit",

    // About Page
    aboutHeroTitle: "Un Style Qui Bouge Avec Vous",
    aboutHeroHighlight: "Né d'une passion",
    aboutHeroSubtitle: "للتصميم الخالد والراحة اليومية",
    ourPurposeTitle: "Notre Mission, Votre Style",
    ourPurposeSubtitle1: "Chez Velora, tout ce que nous créons commence avec vous",
    ourPurposeHighlight: "votre style de vie, votre confiance,",
    ourPurposeSubtitle2: "et votre besoin de mode qui vous va vraiment.",
    ourMissionTitle: "Notre Mission",
    ourMissionText:
      "Créer une mode intemporelle haute qualité qui allie confort et confiance. Nous sommes là pour donner du pouvoir aux individus de tous âges avec des designs polyvalents, inclusifs et intelligemment conçus.",
    ourVisionTitle: "Notre Vision",
    ourVisionText:
      "Devenir une destination mode mondiale de confiance qui redéfinit la façon dont les gens achètent, stylisent et s'expriment. Notre expression personnelle est célébrée, et la mode reste sans effort pour tous.",
    whatMakesUsTitle: "Ce Qui Distingue Velora",
    whatMakesUsHighlight: "Style, Confort et Plus",
    whatMakesUsSubtitle: "- Voici Pourquoi Vous Allez Nous Aimer.",
    premiumQualityTitle: "Qualité Premium",
    premiumQualityText: "Nous n'utilisons que des tissus durables conçus pour tenir et se sentir incroyables.",
    timelessStyleTitle: "Style Intemporel",
    timelessStyleText: "Silhouettes épurées et pièces polyvalentes que vous pouvez mélanger et styliser.",
    inHouseDesignTitle: "Design Interne",
    inHouseDesignText:
      "Chaque détail est conçu par notre équipe de design interne pour vous apporter des vêtements élégants.",
    customerFirstTitle: "Client d'Abord",
    customerFirstText: "Coupes inclusives et tailles conçues pour toutes les formes et tailles.",
    aboutNewsletterSubtitle: "Plus un accès exclusif aux nouveautés, conseils de style et offres privilégiées.",
    followUsOn: "Suivez-nous sur",
    passionLabel: "Passion",
    moreThanClothingTitle: "Plus Que des Vêtements",
    moreThanClothingText1:
      "Chez Velora, nous croyons que la mode devrait être aussi bonne que la vie que vous menez. Que vous vous habilliez pour le quotidien ou que vous cherchiez la tenue parfaite.",
    moreThanClothingText2:
      "Nos collections sont conçues pour vous aider à styliser votre histoire avec confiance et facilité.",
    thoughtfullyDesignedTitle: "Conçu avec Soin pour Tous",
    thoughtfullyDesignedText:
      "Notre gamme couvre Hommes, Enfants et Parfums, chaque pièce soigneusement conçue pour combiner forme, fonction et sensation.",

    welcomeBack: "Bienvenue",
    createAccount: "Créer un Compte",
    loginSubtitle: "Connectez-vous pour accéder à votre compte et commandes",
    signupSubtitle: "Rejoignez Velora pour des avantages exclusifs",
    login: "Connexion",
    signup: "S'inscrire",
    password: "Mot de passe",
    forgotPassword: "Mot de passe oublié?",
    loginButton: "Se Connecter",
    signupButton: "Créer un Compte",
    fullName: "Nom Complet",
    confirmPassword: "Confirmer le Mot de Passe",
    orContinueWith: "ou continuer avec",
    termsText: "En continuant, vous acceptez nos Conditions d'Utilisation et Politique de Confidentialité.",
  },

  ar: {
    // Header & Navigation
    promoMessage: "احصل على خصم 15% على طلبك الأول",
    home: "الرئيسية",
    shop: "المتجر",
    about: "من نحن",
    contact: "اتصل بنا",

    // Hero Section
    heroTitle: "أزياء خالدة لخزانة ملابس عصرية",
    heroSubtitle: "اكتشف أزياء خالدة للرجال والأطفال والعطور – مصممة للراحة ومصممة للثقة.",
    heroButton: "استكشف المجموعة",

    // New Arrivals
    newArrivalsTitle: "وصل حديثاً",
    newArrivalsSubtitle: "كن أول من يرتدي أحدث إطلالات الموسم. منتقاة بعناية ومصممة حديثاً.",
    seeWhatsNew: "شاهد الجديد",

    // Categories
    categoriesTitle: "فئاتنا",
    categoriesSubtitle: "استكشف مجموعة واسعة من الأنماط المنتقاة لتناسب كل الأذواق والاحتياجات.",
    mensWear: "ملابس رجالية",
    perfumes: "العطور",
    kidsWear: "ملابس أطفال",
    accessories: "إكسسوارات",
    shopNow: "تسوق الآن",

    // Bestsellers
    bestsellersTitle: "الأكثر مبيعاً",
    bestsellersSubtitle: "من السترات المفضلة إلى الفساتين الضرورية – هذه هي مفضلات عملائنا.",

    // Exclusive Jacket
    exclusiveJacketTitle: "السترات الحصرية - تبدأ من 40 دولار فقط",
    exclusiveJacketDescription:
      "مصممة للراحة، مصممة للتأثير - هذه هي قطعة الملابس الخارجية التي تعيد تعريف الأناقة اليومية.",
    shopExclusiveJacket: "تسوق السترة الحصرية",

    // Summer Sale
    summerSaleTitle: "أسرع! احصل على خصم يصل إلى 50%",
    summerSaleSubtitle: "ادخل الصيف بأنماط جاهزة للشمس بأسعار لا تفوت.",
    shopSummerSale: "تسوق تخفيضات الصيف",
    day: "يوم",
    hours: "ساعات",
    mins: "دقائق",
    sec: "ثانية",

    // Testimonials
    testimonialsTitle: "ماذا يقول متسوقونا",
    testimonialsSubtitle: "متجر يتقن الموضة والراحة.",
    testimonial1Quote: "لقد غيرت فيلورا تماماً طريقة تسوقي للملابس. كل قطعة مريحة بشكل لا يصدق.",
    testimonial1Author: "جيسيكا م.",
    testimonial1Location: "سان دييغو",
    testimonial2Quote: "أبحث دائماً عن أنماط نظيفة ومتعددة الاستخدامات. الصنعة ممتازة.",
    testimonial2Author: "دارين ل.",
    testimonial2Location: "نيويورك",
    testimonial3Quote: "التسوق لنفسي ولابنتي أصبح سهلاً جداً الآن. أنيق ومتين!",
    testimonial3Author: "ميشيل ت.",
    testimonial3Location: "شيكاغو",

    // How It Works
    howItWorksTitle: "كيف يعمل",
    howItWorksSubtitle: "فقط اختر، احزم وشحن",
    step1Title: "تسوق الأنماط",
    step1Description: "تصفح مجموعاتنا المنسقة للرجال والأطفال والعطور والإكسسوارات.",
    step2Title: "اختر مقاسك",
    step2Description: "ابحث عن مقاسك المثالي مع أدلة المقاس التفصيلية.",
    step3Title: "الدفع السريع",
    step3Description: "استمتع بتجربة دفع سريعة وآمنة مع خيارات دفع مرنة.",

    // Newsletter
    newsletterTitle: "احصل على خصم 10% على طلبك الأول",
    newsletterSubtitle: "بالإضافة إلى وصول حصري لإطلاقات المنتجات ونصائح الأناقة والعروض الداخلية.",
    newsletterPlaceholder: "أدخل بريدك الإلكتروني",
    enterEmailPlaceholder: "أدخل بريدك الإلكتروني *",
    subscribe: "اشترك",

    // Footer
    followUs: "تابعنا",
    freeDelivery: "توصيل مجاني قياسي",
    freeDeliveryDesc: "على جميع الطلبات فوق 100 دولار",
    quickDelivery: "توصيل سريع",
    quickDeliveryDesc: "التوصيل خلال 3 أيام في جميع أنحاء الولايات المتحدة",
    securePayments: "مدفوعات آمنة",
    securePaymentsDesc: "طرق دفع آمنة",
    topRatedService: "خدمة عملاء من الدرجة الأولى",
    topRatedServiceDesc: "ردود وحلول سريعة",
    footerDescription: "أزياء خالدة لخزانة ملابس عصرية.",
    company: "الشركة",
    careers: "وظائف",
    blog: "المدونة",
    legal: "قانوني",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    returns: "المرتجعات والاسترداد",
    allRightsReserved: "جميع الحقوق محفوظة.",

    // Product
    sale: "تخفيض",
    selectOptions: "اختر الخيارات",

    // Contact Page
    contactUsTitle: "اتصل بنا",
    contactUsSubtitle:
      "هل لديك سؤال حول طلبك أو المقاس أو الشحن أو تريد فقط أن تقول مرحباً؟ فريقنا في فيلورا سعيد دائماً بسماع منك.",
    sendUsMessage: "أرسل لنا رسالة",
    namePlaceholder: "الاسم *",
    emailPlaceholder: "البريد الإلكتروني *",
    commentPlaceholder: "تعليق *",
    saveInfo: "احفظ اسمي وبريدي الإلكتروني وموقعي في هذا المتصفح",
    send: "إرسال",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    address: "العنوان",
    exploreSupportTopics: "استكشف مواضيع الدعم لدينا",
    supportTopicsSubtitle: "من المرتجعات والشحن إلى المقاسات والمدفوعات، لدينا إجابات لجميع أسئلتك الشائعة.",
    returnsExchanges: "المرتجعات والتبديل",
    returnsExchangesLink: "المرتجعات والتبديل",
    howToStartReturn: "كيفية بدء الإرجاع",
    checkRefundStatus: "تحقق من حالة الاسترداد",
    orderingPayment: "الطلب والدفع",
    aboutCancelOrder: "حول مقابل إلغاء الطلب",
    editOrderAfter: "تعديل الطلب بعد",
    paymentMethods: "طرق الدفع",
    shippingDelivery: "الشحن والتوصيل",
    trackDeliveryCosts: "التتبع/التوصيل والتكاليف",
    estimatedDeliveryTimes: "أوقات التوصيل المقدرة",
    freeShipDeals: "صفقات الشحن المجاني",
    productInformation: "معلومات المنتج",
    sizeGuides: "أدلة المقاسات",
    careInstructions: "تعليمات العناية",
    availabilityAlerts: "التوفر والتنبيهات",
    accountPrivacy: "الحساب والخصوصية",
    signUpAccount: "تسجيل / إنشاء حساب",
    managePersonalData: "إدارة البيانات الشخصية",
    cookiePolicy: "سياسة ملفات تعريف الارتباط",
    sizingFit: "المقاسات والملاءمة",
    chooseSizes: "اختر المقاسات",
    fitRecommendations: "توصيات الملاءمة",
    productMeasurements: "قياسات المنتج",

    // About Page
    aboutHeroTitle: "أسلوب يتحرك معك",
    aboutHeroHighlight: "ولد من شغف",
    aboutHeroSubtitle: "للتصميم الخالد والراحة اليومية",
    ourPurposeTitle: "هدفنا، أسلوبك",
    ourPurposeSubtitle1: "في فيلورا، كل ما نصنعه يبدأ بك",
    ourPurposeHighlight: "أسلوب حياتك، ثقتك،",
    ourPurposeSubtitle2: "وحاجتك للأزياء التي تناسبك حقاً.",
    ourMissionTitle: "مهمتنا",
    ourMissionText:
      "إنشاء أزياء خالدة عالية الجودة تمزج الراحة مع الثقة. نحن هنا لتمكين الأفراد من جميع الأعمار بتصاميم متعددة الاستخدامات وشاملة ومصممة بذكاء.",
    ourVisionTitle: "رؤيتنا",
    ourVisionText:
      "أن نصبح وجهة أزياء موثوقة عالمية تعيد تعريف الطريقة التي يتسوق بها الناس ويصممون ويعبرون عن أنفسهم. التعبير عن الذات محتفى به، والموضة تبقى سهلة للجميع.",
    whatMakesUsTitle: "ما يميز فيلورا",
    whatMakesUsHighlight: "أناقة، راحة وأكثر",
    whatMakesUsSubtitle: "- إليك لماذا ستحبنا.",
    premiumQualityTitle: "جودة ممتازة",
    premiumQualityText: "نستخدم فقط أقمشة متينة مصممة لتدوم وتشعر بالروعة.",
    timelessStyleTitle: "أسلوب خالد",
    timelessStyleText: "تصاميم نظيفة وقطع متعددة الاستخدامات يمكنك مزجها وتنسيقها.",
    inHouseDesignTitle: "تصميم داخلي",
    inHouseDesignText: "كل التفاصيل مصممة من قبل فريق التصميم الداخلي لدينا لإحضار ملابس أنيقة لك.",
    customerFirstTitle: "العميل أولاً",
    customerFirstText: "مقاسات شاملة وأحجام مصممة لتعكس جميع الأشكال والأحجام.",
    aboutNewsletterSubtitle: "بالإضافة إلى وصول حصري لإطلاقات المنتجات ونصائح الأناقة والعروض الداخلية.",
    followUsOn: "تابعنا على",
    passionLabel: "شغف",
    moreThanClothingTitle: "أكثر من مجرد ملابس",
    moreThanClothingText1:
      "في فيلورا، نؤمن أن الموضة يجب أن تكون بجودة الحياة التي تعيشها. سواء كنت ترتدي ملابس للحياة اليومية أو تبحث عن الزي المثالي.",
    moreThanClothingText2: "مجموعاتنا مصممة لمساعدتك على تصميم قصتك بثقة وسهولة.",
    thoughtfullyDesignedTitle: "مصمم بعناية للجميع",
    thoughtfullyDesignedText:
      "تغطي مجموعتنا الرجال والأطفال والعطور، مع صنع كل قطعة بعناية لدمج الشكل والوظيفة والشعور. كل شيء في فيلورا مصمم مع الحياة الحقيقية في الاعتبار.",

    welcomeBack: "مرحباً بعودتك",
    createAccount: "إنشاء حساب",
    loginSubtitle: "سجل الدخول للوصول إلى حسابك وطلباتك",
    signupSubtitle: "انضم إلى فيلورا للحصول على مزايا حصرية",
    login: "تسجيل الدخول",
    signup: "إنشاء حساب",
    password: "كلمة المرور",
    forgotPassword: "نسيت كلمة المرور؟",
    loginButton: "تسجيل الدخول",
    signupButton: "إنشاء حساب",
    fullName: "الاسم الكامل",
    confirmPassword: "تأكيد كلمة المرور",
    orContinueWith: "أو تابع مع",
    termsText: "بالمتابعة، فإنك توافق على شروط الخدمة وسياسة الخصوصية الخاصة بنا.",
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && ["en", "fr", "ar"].includes(saved)) {
      setLanguage(saved)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}

// ── NAV SCROLL ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// ── INTERSECTION OBSERVER ──
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
fadeEls.forEach(el => observer.observe(el));

// ── NUMBER COUNTER ──
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    el.textContent = current.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
const statNums = document.querySelectorAll('.stat-num[data-target]');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = true;
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.5 });
statNums.forEach(el => statObserver.observe(el));

// ── HERO MOCK COUNTERS ──
setTimeout(() => {
  const leadsEl = document.getElementById('mockLeads');
  const pagesEl = document.getElementById('mockPages');
  if (leadsEl) animateMock(leadsEl, 47, 1200);
  if (pagesEl) animateMock(pagesEl, 120, 1500);
}, 600);
function animateMock(el, target, duration) {
  const start = performance.now();
  function update(now) {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(p * target);
    if (p < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const slider = document.getElementById('slider');
function slide(direction, button) {
    const slider = button.closest('.slider-container').querySelector('.gallery-slider');
    const scrollAmount = slider.clientWidth;
    if (direction === 'left') {
        slider.scrollLeft -= scrollAmount;
    } else {
        slider.scrollLeft += scrollAmount;
    }
}

// ── MODAL ──
function openModal(e) {
  e.preventDefault();
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}
function closeModalOutside(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
function openGalleryModal(src) {
    const modal = document.getElementById("imageGalleryModal");
    const img = document.getElementById("fullImage");
    modal.style.display = "flex";
    img.src = src;
    document.body.style.overflow = "hidden";
}
function closeGalleryModal() {
    document.getElementById("imageGalleryModal").style.display = "none";
    document.body.style.overflow = "auto";
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeGalleryModal();
    }
});

const rawSites = [
  "adrlicenceddriver.co.uk",
  "aerial-installation.co.uk",
  "affordablehouseremoval.co.uk",
  "afterbuilderscleanbelfast.co.uk",
  "afterbuilderscleanbirkenhead.co.uk",
  "afterbuilderscleanbradford.co.uk",
  "afterbuilderscleanbristol.co.uk",
  "afterbuilderscleancardiff.co.uk",
  "afterbuilderscleancoventry.co.uk",
  "afterbuilderscleanderby.co.uk",
  "afterbuilderscleanedinburgh.co.uk",
  "afterbuilderscleanglasgow.co.uk",
  "afterbuilderscleanhull.co.uk",
  "afterbuilderscleanislington.co.uk",
  "afterbuilderscleanleeds.co.uk",
  "afterbuilderscleanleicester.co.uk",
  "afterbuilderscleanliverpool.co.uk",
  "afterbuilderscleanlondon.uk",
  "afterbuilderscleanluton.co.uk",
  "afterbuilderscleanmanchester.co.uk",
  "afterbuilderscleanmiltonkeynes.co.uk",
  "afterbuilderscleannewport.co.uk",
  "afterbuilderscleannorthampton.co.uk",
  "afterbuilderscleannottingham.co.uk",
  "afterbuilderscleanportsmouth.co.uk",
  "afterbuilderscleanpreston.co.uk",
  "afterbuilderscleanreading.co.uk",
  "afterbuilderscleansheffield.co.uk",
  "afterbuilderscleansouthampton.co.uk",
  "afterbuilderscleansouthend.co.uk",
  "afterbuilderscleanstoke.co.uk",
  "afterbuilderscleansunderland.co.uk",
  "afterbuilderscleanswansea.co.uk",
  "afterbuilderscleanwolverhampton.co.uk",
  "afterconstructioncleaners.uk",
  "agacleaning.uk",
  "airconditioningcleaninguae.com",
  "airconditioningrepair.uk",
  "aluminiumblindcleaning.co.uk",
  "appliancecleaners.co.uk",
  "appliance-disposal.co.uk",
  "appliancedisposal.uk",
  "appliance-installation.co.uk",
  "applianceinstallers.co.uk",
  "applianceinstallers.uk",
  "appliance-repair.org.uk",
  "artexceilingremoval.uk",
  "artexceilingrepair.co.uk",
  "artexcovering.uk",
  "artexremovalcompany.co.uk",
  "artexremovallondon.co.uk",
  "artexremoval.org.uk",
  "artex-remover.co.uk",
  "artworkinstallation.uk",
  "asbestosartexremoval.co.uk",
  "asbestosremovalservice.org.uk",
  "asphaltdriveways.uk",
  "astroturfinstallation.co.uk",
  "awninginstallation.co.uk",
  "bathroomfitters.org.uk",
  "bathroom-installation.co.uk",
  "bathroommouldremoval.co.uk",
  "bathroommouldremoval.uk",
  "bathroom-refurb.uk",
  "bathroomremodelling.co.uk",
  "bathroomrepair.co.uk",
  "bathroomresealingservice.co.uk",
  "bathroomresealingservices.co.uk",
  "bathroomtilers.uk",
  "bedassembly.co.uk",
  "bedbugremoval.uk",
  "bedbugtreatment.uk",
  "bereavementclearance.co.uk",
  "bestplumbingservice.co.uk",
  "biohazardouswastecleaning.co.uk",
  "birddroppingcleaning.co.uk",
  "birddroppingremoval.co.uk",
  "blackmouldcleaning.co.uk",
  "blind-fitting.co.uk",
  "blindfitting.uk",
  "blindscleaningae.com",
  "blindscleaningcompany.com",
  "blockpavingcompany.co.uk",
  "boiler-servicing.uk",
  "breakuptoboss.com",
  "brick-cleaning.uk",
  "builderscleaningservices.uk",
  "builderscleaningservice.uk",
  "builders-clean.org.uk",
  "builderswasteremoval.uk",
  "buildingsnagging.uk",
  "bulkyrubbishcollection.co.uk",
  "bulky-waste-collection.co.uk",
  "bulkywastecollection.uk",
  "bulkywasteremoval.co.uk",
  "business-removals.uk",
  "buyelysium.com",
  "buynumbs.com",
  "cabletrunking.uk",
  "caravancleancompany.com",
  "caravan-cleaner.uk",
  "caravan-washing.co.uk",
  "car-movers.uk",
  "carpet-cleaners.org.uk",
  "carpetcleaningae.com",
  "carpetcleaningfirm.co.uk",
  "carpetremoval.uk",
  "carpetrepair.org.uk",
  "carpetshampoocompany.co.uk",
  "catflapinstallation.uk",
  "catrunbuilders.co.uk",
  "catrunbuilders.uk",
  "catwasteremoval.co.uk",
  "caulkingservices.co.uk",
  "ceilingfanrepair.co.uk",
  "ceilingmouldremoval.co.uk",
  "ceilingmouldremoval.uk",
  "ceilingrepair.uk",
  "ceilingreplacement.uk",
  "centralheatingpowerflush.co.uk",
  "ceramictiling.uk",
  "chandeliercleaning.org.uk",
  "chartered-surveyor.org.uk",
  "charteredsurveyor.org.uk",
  "cheapmovingcompany.co.uk",
  "chewing-gum-removal.co.uk",
  "chewinggumremoval.uk",
  "childrens-entertainer.co.uk",
  "chimney-cleaning.uk",
  "chimneyinspection.org.uk",
  "chimneyrepair.org.uk",
  "chimneysweep.org.uk",
  "claddingremoval.co.uk",
  "claddingrespraying.co.uk",
  "cladding-spraying.uk",
  "cleanerservices.uk",
  "cleaningafterconstruction.co.uk",
  "coldchainlogistics.uk",
  "collecthouseholdwaste.co.uk",
  "commercialfloorcleaning.co.uk",
  "commercialkitchencleaners.uk",
  "commercialkitchencleaning.org.uk",
  "commercialkitchencleaning.uk",
  "commercialovencleaner.co.uk",
  "commercialpainters.uk",
  "commercialpaintingcompany.uk",
  "commercial-removals.uk",
  "companionservices.uk",
  "condensationremoval.co.uk",
  "conservatoryroofclean.uk",
  "constructioncleaners.co.uk",
  "constructionclean.org.uk",
  "construction-security.uk",
  "construction-site-cleaning.co.uk",
  "constructiontoilethire.org.uk",
  "constructionwasteremoval.co.uk",
  "contract-cleaners.org.uk",
  "contractcleaners.org.uk",
  "contractorportal.org",
  "cookercleaner.uk",
  "cooker-cleaning.uk",
  "cookerhoodcleaning.uk",
  "couchcleaning.uk",
  "courier-company.uk",
  "courier-services.uk",
  "crimescenecleanup.uk",
  "crosscountrymove.co.uk",
  "cupboardrepair.co.uk",
  "curtainfitters.uk",
  "curtainfitting.uk",
  "dampcleaningcompany.co.uk",
  "damp-detection.co.uk",
  "dampproofcompany.co.uk",
  "dampproofingbirmingham.org.uk",
  "dampproofingbradford.co.uk",
  "dampproofingbrighton.uk",
  "dampproofingbristol.co.uk",
  "dampproofingcoventry.uk",
  "dampproofingderby.co.uk",
  "dampproofingleeds.org.uk",
  "dampproofingleicester.co.uk",
  "dampproofingliverpool.uk",
  "dampproofinglondon.org.uk",
  "dampproofingluton.uk",
  "dampproofingmanchester.org.uk",
  "dampproofingmiltonkeynes.org.uk",
  "dampproofingnewcastle.uk",
  "dampproofingnorthampton.co.uk",
  "dampproofingnorwich.co.uk",
  "dampproofingnottingham.uk",
  "damp-proofing.org.uk",
  "dampproofingplymouth.co.uk",
  "dampproofingportsmouth.uk",
  "dampproofingreading.uk",
  "dampproofingsheffield.uk",
  "dampproofingsouthampton.co.uk",
  "dampproofingspecialist.org.uk",
  "dampproofingwolverhampton.uk",
  "dampremovalcompany.uk",
  "dampsolutions.org.uk",
  "dampspecialist.org.uk",
  "debarasarelocuinta.com",
  "deckingremoval.uk",
  "demolitioncompany.org.uk",
  "digitalwealth.vip",
  "dirtremoval.co.uk",
  "disabled-bathrooms.uk",
  "dishwashercleaning.co.uk",
  "dishwasherinstallers.co.uk",
  "displayboardrental.co.uk",
  "dog-poo-removal.co.uk",
  "dogpooremoval.uk",
  "dog-waste-removal.uk",
  "domestic-cleaners.org.uk",
  "domestichomecleaning.co.uk",
  "door-fitters.uk",
  "doorfitting.org.uk",
  "doorfittingservice.co.uk",
  "doorfitting.uk",
  "doorinstallationae.com",
  "doorinstallation.org.uk",
  "doorplaning.co.uk",
  "doorreplacement.uk",
  "door-shaving.co.uk",
  "doorshavinguae.com",
  "doorshaving.uk",
  "doortrimming.org.uk",
  "drainage-survey.uk",
  "drainunblocking.org.uk",
  "drain-unblocking.uk",
  "draughtproofing.uk",
  "drivewayinstallation.co.uk",
  "drivewayrestoration.co.uk",
  "dryliningservices.co.uk",
  "dubaicompanysetup.uk",
  "ductcleaning.org.uk",
  "dustingservice.co.uk",
  "dustremoval.co.uk",
  "electricalfaultfinding.co.uk",
  "electricalinstallationconditionreports.co.uk",
  "electricalrewiring.co.uk",
  "electricsafetysurvey.co.uk",
  "elitecharter.co.uk",
  "emergencycleaners.org.uk",
  "emergencycleaning.org.uk",
  "emergency-courier.co.uk",
  "emergencydampproofing.co.uk",
  "emergency-delivery.co.uk",
  "emergencymouldcleaning.co.uk",
  "emergencyplasterer.uk",
  "emergency-transport.co.uk",
  "endofbuildcleaners.co.uk",
  "endofbuildcleaners.uk",
  "endoftenancycleaningbristol.co.uk",
  "endoftenancycleaningcompany.co.uk",
  "endoftenancyclearance.uk",
  "energyperformancecertificates.org.uk",
  "europeanmoves.co.uk",
  "event-cleaning.co.uk",
  "eventfencing-ae.com",
  "eventfencing.uk",
  "event-security.uk",
  "eventtoilets.uk",
  "expertcarpetcleaning.uk",
  "exteriorpainting.uk",
  "externalhousepainting.org.uk",
  "external-renderers.co.uk",
  "extractorfancleaning.com",
  "extractorfancleaning.org.uk",
  "extractorhoodcleaning.uk",
  "facadecleaning.uk",
  "facilities-management.uk",
  "faecesremoval.co.uk",
  "fakegrassinstaller.uk",
  "feltroofing.org.uk",
  "fencealgaeremoval.co.uk",
  "fencepanelrepair.uk",
  "fencereplacement.co.uk",
  "fencingpainting.co.uk",
  "firedoorinstallation.org.uk",
  "firemarshallservices.co.uk",
  "fireplaceinstallation.uk",
  "fireplaceremovalcompany.com",
  "fireplaceremoval.co.uk",
  "firesafetysurvey.co.uk",
  "firesprinklerinstallers.uk",
  "firestopping.org.uk",
  "fishtankcleaning.org.uk",
  "flatcleaningservices.uk",
  "flatclearance.uk",
  "flatpackfurniturebuilders.co.uk",
  "flat-roofing.org.uk",
  "flatroofinspection.org.uk",
  "flatroofsurvey.uk",
  "floodcleaning.co.uk",
  "flooddrying.uk",
  "floorboardrepair.co.uk",
  "floorbuffing.co.uk",
  "floorfinishing.co.uk",
  "flooringfitters.org.uk",
  "flooringfitters.uk",
  "flooringrepair.co.uk",
  "floorlayers.uk",
  "floorsandingaberdeen.co.uk",
  "floorsandingbirmingham.uk",
  "floorsandingbradford.co.uk",
  "floorsandingbristol.uk",
  "floorsandingcompany.uk",
  "floorsandingcontractors.org.uk",
  "floorsandingcoventry.co.uk",
  "floorsandingderby.uk",
  "floorsandingdundee.co.uk",
  "floorsandingedinburgh.uk",
  "floorsandingglasgow.uk",
  "floorsandinghull.co.uk",
  "floorsandingleeds.org.uk",
  "floorsandingleicester.uk",
  "floorsandinglondon.org.uk",
  "floorsandingmanchester.uk",
  "floorsandingnewcastle.uk",
  "floorsandingnottingham.uk",
  "floorsanding.org.uk",
  "floorsandingplymouth.uk",
  "floorsandingportsmouth.uk",
  "floorsandingreading.uk",
  "floorsandingsheffield.co.uk",
  "floorsandingstoke.co.uk",
  "floorsandingswansea.uk",
  "floorsandingwolverhampton.co.uk",
  "floorscreeders.org.uk",
  "floortilefitters.co.uk",
  "floortilers.co.uk",
  "floortilinguae.com",
  "floortiling.uk",
  "floorvarnishing.co.uk",
  "flytippingremoval.uk",
  "fridge-disposal.co.uk",
  "fridgeremoval.uk",
  "fullbuildingsurvey.uk",
  "fullhousemove.uk",
  "furnitureassemblyuae.com",
  "furniture-collection.uk",
  "furnituredismantling.co.uk",
  "furnituredismantling.uk",
  "furnituredisposal.uk",
  "furnituremovers.uk",
  "furniturepickup.co.uk",
  "furniturerelocation.co.uk",
  "garage-clearance.uk",
  "garageconversions.org.uk",
  "garagerenovation.uk",
  "gardenannexes.uk",
  "gardencleaningservices.co.uk",
  "gardencleaning.uk",
  "gardenclearancecompany.uk",
  "gardenclearanceservices.co.uk",
  "garden-clearance.uk",
  "gardenclearers.co.uk",
  "garden-clearing.co.uk",
  "gardenclearing.uk",
  "gardenclearout.co.uk",
  "gardenfurnituredisposal.co.uk",
  "gardenjunkremoval.co.uk",
  "garden-rooms.org.uk",
  "gardenrubbishremoval.co.uk",
  "gardenrubbishremoval.org.uk",
  "gardenrubbishremoval.uk",
  "gardenshedclearance.co.uk",
  "gardenshedclearance.uk",
  "gardenshedremoval.co.uk",
  "gardenshedremoval.uk",
  "gardenwallbuilders.co.uk",
  "gardenwastedisposal.co.uk",
  "gardenwasteremoval.uk",
  "gassafetycertificate.uk",
  "gazeboinstallation.uk",
  "generalwastecollection.co.uk",
  "generalwasteremoval.co.uk",
  "generatorinstallers.org.uk",
  "glassrepair.org.uk",
  "grandpianomovers.uk",
  "grass-cutting.co.uk",
  "grass-cutting.org.uk",
  "grasslayers.co.uk",
  "graveldriveways.uk",
  "greaseextractioncleaning.co.uk",
  "greenhouseassembly.co.uk",
  "greenhousebuilders.uk",
  "greenhouseremoval.uk",
  "greyhippo.net",
  "groutcleaning.org.uk",
  "gutter-cleaners.uk",
  "gutterinstallers.co.uk",
  "gutterrepair.org.uk",
  "gutter-repair.uk",
  "gutterunblocking.uk",
  "handymandoorfitting.co.uk",
  "hangnewdoor.co.uk",
  "hardwood-floor-sanding.uk",
  "hardwoodfloorsanding.uk",
  "hazardousgoodtransport.co.uk",
  "hippobagcollection.co.uk",
  "hipposackcollection.co.uk",
  "hoarderclearance.co.uk",
  "hoarderhouseclearance.co.uk",
  "hoardingclean.co.uk",
  "homebuyerreport.org.uk",
  "home-cleaning.org.uk",
  "homecleaningservices.org.uk",
  "home-repairs.org.uk",
  "hottubcleaning.uk",
  "hottubmovers.org.uk",
  "house-cleaning.org.uk",
  "housecleaningservice.org.uk",
  "houseclearancecompany.org.uk",
  "house-clearance-company.uk",
  "houseclearancecompany.uk",
  "house-clearance-services.co.uk",
  "house-clearance-services.uk",
  "houseclearances.org.uk",
  "house-decluttering.co.uk",
  "housedeepcleaning.co.uk",
  "housedeepcleaningservice.co.uk",
  "housedeepcleaning.uk",
  "householdcleaning.co.uk",
  "household-clearance.uk",
  "householdclearance.uk",
  "householdwasteremoval.org.uk",
  "householdwasteremoval.uk",
  "housekeeperservices.co.uk",
  "housemovingcompany.org.uk",
  "housepainting.uk",
  "housepressurewashing.co.uk",
  "housewasteclearance.co.uk",
  "housewastecollection.co.uk",
  "humanwastecleaning.co.uk",
  "ikeaassemblyservice.co.uk",
  "independentroofinspector.co.uk",
  "independentroofsurveyor.co.uk",
  "industrialbuildingrefurbishment.co.uk",
  "industrialcarpetcleaning.co.uk",
  "industrialovencleaner.co.uk",
  "installlockbox.co.uk",
  "insulatedgardenroom.uk",
  "interiorpainting.uk",
  "internaldoorfitter.co.uk",
  "international-movers.uk",
  "internationalmovingcompany.uk",
  "international-removals.uk",
  "inventorycheck.org.uk",
  "ivy-removal.co.uk",
  "jalousienreinigen.com",
  "japanese-knotweed-removal.uk",
  "jet-washing.uk",
  "k9dogunits.co.uk",
  "kerbdropping.uk",
  "kitchenappliancecleaners.co.uk",
  "kitchenductcleaning.org.uk",
  "kitchenductcleaning.uk",
  "kitchenextractioncleaning.org.uk",
  "kitchenextractionclean.uk",
  "kitchenextractorcleaning.co.uk",
  "kitchenfancleaning.co.uk",
  "kitchenfancleaning.uk",
  "kitchenspraying.uk",
  "kitchenventcleaning.co.uk",
  "ksmcarpenters.co.uk",
  "laminateflooringfitters.uk",
  "lastminutecleaners.uk",
  "lastminutecleaningservice.co.uk",
  "lastminuteplumber.uk",
  "lastminuteremoval.co.uk",
  "lastminuteremovals.org.uk",
  "leadflashing.uk",
  "leadsender.uk",
  "leakdamagerepair.co.uk",
  "ledlightinstallers.co.uk",
  "limeplastering.org.uk",
  "litterclearance.co.uk",
  "localcarpetcleaners.uk",
  "local-cleaning-services.co.uk",
  "local-cleaning-services.uk",
  "localmanandvan.uk",
  "local-skip-hire.org.uk",
  "localtiler.uk",
  "loft-boarding.org.uk",
  "loftclearance.org.uk",
  "loft-clearance.uk",
  "longdistancemove.co.uk",
  "longdistanceremovals.uk",
  "luxuryarchitects.co.uk",
  "lvtflooringfitters.co.uk",
  "maidservices.uk",
  "man-and-van-service.uk",
  "manandvanuae.com",
  "maninvan.org.uk",
  "man-with-a-van.uk",
  "manwithvan.uk",
  "marblecleaning.uk",
  "marblerestoration.uk",
  "mattresscleaners.co.uk",
  "mediawallbuilders.uk",
  "mediawallinstallers.uk",
  "metalroofsurvey.co.uk",
  "microwavecleaner.co.uk",
  "mirrorhanging.co.uk",
  "misterhandyman.uk",
  "mobilecardetailinguae.com",
  "moldcleaners.org.uk",
  "mold-cleaners.uk",
  "mosaictileinstallers.co.uk",
  "motorbiketransport.uk",
  "motorhomecleaning.co.uk",
  "motorhomecleaning.uk",
  "mouldcleaningcompany.co.uk",
  "mouldcleaning.org.uk",
  "mouldremovalservice.co.uk",
  "mouldremovalservices.org.uk",
  "mould-specialist.co.uk",
  "mouldtesting.uk",
  "mould-treatment.uk",
  "mouldtreatment.uk",
  "moveeasy.app",
  "movefurniture.uk",
  "moveincleaningservice.co.uk",
  "move-out-clean.co.uk",
  "moveoutcleaningservices.org.uk",
  "moverwithtaillift.co.uk",
  "movinghousecompany.co.uk",
  "movingpropertyclean.co.uk",
  "moving-services.uk",
  "movingvan.uk",
  "mrpressurewashingcompany.com",
  "needcleaner.co.uk",
  "needleremoval.co.uk",
  "next-day-delivery.org.uk",
  "nextdaymovers.uk",
  "office-clearance.uk",
  "officeequipmentrental.co.uk",
  "officefurnitureassembly.co.uk",
  "officefurnituremovers.co.uk",
  "officemovers.org.uk",
  "officemovingservice.co.uk",
  "office-relocation.co.uk",
  "officerelocation.org.uk",
  "officerelocation.uk",
  "officeremovalists.co.uk",
  "officeremovalscompany.uk",
  "office-removals.uk",
  "officewasteclearance.uk",
  "oilstainremoval.co.uk",
  "oiltankremoval.org.uk",
  "oldshedremoval.co.uk",
  "oneoffdeepcleaners.uk",
  "onsitepaintspraying.uk",
  "outdoorcatenclosure.co.uk",
  "outdoor-lighting.uk",
  "outdoorlightsinstallation.co.uk",
  "ovencleaningcompany.org.uk",
  "ovencleaningservice.org.uk",
  "ovencleaningservice.uk",
  "oven-cleaning.uk",
  "ovendeepclean.co.uk",
  "ovendeepcleaning.co.uk",
  "overgrowngardenclearance.co.uk",
  "overnightdelivery.uk",
  "overseasmovingcompany.uk",
  "packingandmovingcompany.co.uk",
  "packingcompany.uk",
  "paint-spraying.co.uk",
  "parquetfloorrefurbishment.co.uk",
  "partybushire.org.uk",
  "patiodoorrepair.uk",
  "patioservices.co.uk",
  "pavementcleaning.co.uk",
  "penetratingdamp.uk",
  "periodrestorations.co.uk",
  "pestcontrolcompany.uk",
  "pestremovalcompany.co.uk",
  "petstainremoval.co.uk",
  "photocopierrental.uk",
  "piano-movers.uk",
  "pianomovers.uk",
  "picturehangingservice.co.uk",
  "pipeleakdetection.org.uk",
  "pivfitters.co.uk",
  "pivinstallers.uk",
  "pivunitinstallation.uk",
  "pizzastonecleaning.co.uk",
  "plasterboarding.co.uk",
  "plasterboardrepair.co.uk",
  "plasteringartex.co.uk",
  "plasteringcourse.uk",
  "plasterpatchrepair.co.uk",
  "plastic-recycling.uk",
  "plumbingrepair.uk",
  "porchinstallation.co.uk",
  "portabletoilethire.org.uk",
  "portaloohire.org.uk",
  "postbuildcleaners.co.uk",
  "postbuildcleaners.uk",
  "postbuildingclean.co.uk",
  "postconstructioncleaners.co.uk",
  "postconstructioncleaners.org.uk",
  "postconstructioncleaning.uk",
  "posttenancycleaning.co.uk",
  "powerspraying.co.uk",
  "powerwashingservice.co.uk",
  "pressure-cleaning.uk",
  "pressurecleaning.uk",
  "pressure-washer.uk",
  "pressurewashingcompany.org.uk",
  "pressurewashingcompany.uk",
  "pressure-washing.org.uk",
  "pressurewashing.org.uk",
  "printerrental.org.uk",
  "privatedetective.org.uk",
  "privatedomesticcleaners.co.uk",
  "privateinvestigators.org.uk",
  "probateclearance.uk",
  "profesjonellgulvrestaurering.com",
  "professionalblindcleaning.co.uk",
  "professionaldomesticcleaners.co.uk",
  "professionalfurnitureassembly.co.uk",
  "professionalfurnituremovers.co.uk",
  "professionalhousecleaning.co.uk",
  "professionalkitchencleaners.co.uk",
  "professionalmouldremoval.uk",
  "professionalovencleaner.uk",
  "professionaltilingservices.co.uk",
  "professionalwasteclearance.co.uk",
  "prohomecareuae.com",
  "property-clearance.uk",
  "property-inspection.uk",
  "propertysurveys.org.uk",
  "puttingupblinds.co.uk",
  "quantity-surveying.uk",
  "radiatorbleeding.co.uk",
  "radiatorbleeding.uk",
  "radiatorfitters.co.uk",
  "radiatorrepair.co.uk",
  "radiator-replacement.co.uk",
  "rangeovencleaning.co.uk",
  "refrigeratedtransport.uk",
  "refusecollection.uk",
  "removal-firm.co.uk",
  "removal-firm.uk",
  "removalservices.uk",
  "removeartex.uk",
  "removegrafitti.co.uk",
  "removeoldshed.co.uk",
  "removeshed.co.uk",
  "replacegutters.co.uk",
  "replacerooftile.co.uk",
  "resealshower.co.uk",
  "residentialarchitects.org.uk",
  "residentialcleaningservice.co.uk",
  "residentialcleaningservices.uk",
  "restaurantcleaningservices.co.uk",
  "retailsecurity.uk",
  "retainingwallbuilders.uk",
  "rjservicesau.com",
  "rjservicesaus.com",
  "rjservicescompany.co.uk",
  "rjsolutionscompany.co.uk",
  "rollershutterspraying.co.uk",
  "roofassessment.co.uk",
  "roofcleaning.org.uk",
  "roofinginspection.uk",
  "roofinspection.org.uk",
  "roofmosscleaning.uk",
  "roof-spraying.co.uk",
  "roofsurveyaberdeen.co.uk",
  "roofsurveybirmingham.uk",
  "roofsurveybristol.co.uk",
  "roofsurveycompany.com",
  "roofsurveycoventry.co.uk",
  "roofsurveyderby.co.uk",
  "roofsurveyedinburgh.co.uk",
  "roofsurveyglasgow.co.uk",
  "roofsurveyhull.co.uk",
  "roofsurveyleeds.co.uk",
  "roofsurveyleicester.co.uk",
  "roofsurveylondon.co.uk",
  "roofsurveymanchester.uk",
  "roofsurveynottingham.co.uk",
  "roof-survey.org.uk",
  "roofsurveyor.org.uk",
  "roof-surveyors.uk",
  "roofsurveyplymouth.co.uk",
  "roofsurveyreading.co.uk",
  "roofsurveysheffield.co.uk",
  "roofsurveysouthampton.co.uk",
  "roofsurveystoke.co.uk",
  "roofsurveyswansea.co.uk",
  "roofsurveywolverhampton.co.uk",
  "rubbishcleaning.uk",
  "rubbish-disposal.org.uk",
  "rubbish-disposal.uk",
  "rubbishremovalcompany.org.uk",
  "rubbishremovalcompany.uk",
  "rubbish-removal.org.uk",
  "rubbledisposal.co.uk",
  "rubbleremoval.uk",
  "rv-cleaning.com",
  "samedaycleaningservice.co.uk",
  "same-day-couriers.uk",
  "samedayhomecleaning.co.uk",
  "samedayhousecleaning.co.uk",
  "samedayremovals.uk",
  "scaffolding-company.uk",
  "scaffoldinghire.org.uk",
  "scaffolding-hire.uk",
  "securityguardservices.uk",
  "shavedowndoors.co.uk",
  "shedassembly.co.uk",
  "shedbuilders.uk",
  "shedclearancebelfast.co.uk",
  "shedclearancebirmingham.co.uk",
  "shedclearancebristol.co.uk",
  "shedclearanceedinburgh.co.uk",
  "shedclearanceglasgow.co.uk",
  "shedclearanceleicester.co.uk",
  "shedclearanceliverpool.co.uk",
  "shedclearancelondon.co.uk",
  "shedclearancemanchester.co.uk",
  "shedclearancenorwich.co.uk",
  "sheddemolition.co.uk",
  "sheddismantling.co.uk",
  "sheddisposal.org.uk",
  "shedpainting.co.uk",
  "shedremovalcalifornia.com",
  "shed-removal.co.uk",
  "shedremoval.net",
  "shedremovals.uk",
  "shedremoval.uk",
  "shedrubbishclearance.co.uk",
  "shelfinstallation.co.uk",
  "shelfmounting.co.uk",
  "shelveinstallation.co.uk",
  "shelvinginstallation.co.uk",
  "shelvinginstallation.uk",
  "shop-front-spraying.uk",
  "showermouldremoval.co.uk",
  "showermouldremoval.uk",
  "showerregrouting.co.uk",
  "showerresealing.co.uk",
  "showersealantreplacement.co.uk",
  "showersealingservice.co.uk",
  "showersealreplacement.co.uk",
  "showerunblocking.co.uk",
  "showerwaterproofing.co.uk",
  "signwriting.org.uk",
  "siliconerendering.org.uk",
  "siliconeresealing.co.uk",
  "sitecleaning.co.uk",
  "skirtingboardfitting.co.uk",
  "smokealarminstaller.co.uk",
  "snaggingcompany.org.uk",
  "snaggingsurvey.org.uk",
  "sofacleaningae.com",
  "sofacleaninguae.com",
  "sofaremoval.uk",
  "sofastainremoval.uk",
  "softstripoutdemolition.uk",
  "softwashing.org.uk",
  "soft-washing.uk",
  "soilremoval.co.uk",
  "solar-panel-cleaning.uk",
  "sound-proofers.co.uk",
  "sparkcleancompany.com",
  "splashbackinstallation.co.uk",
  "sportshallcleaning.co.uk",
  "sprayfoamremovalcompany.org.uk",
  "stocktonmachines.com",
  "stonecleaning.org.uk",
  "stovecleaning.co.uk",
  "structural-survey.co.uk",
  "suicidecleanup.co.uk",
  "summer-houses.co.uk",
  "summer-houses.uk",
  "swimmingpoolinstallation.org.uk",
  "swingersparty.org.uk",
  "tapeandjointer.uk",
  "taskhjelp.com",
  "teletracker.me",
  "temporaryfencing-ae.com",
  "tennis-court-cleaning.uk",
  "tenniscourtmaintenancecompany.com",
  "thatchedroofing.org.uk",
  "thehandymanaus.com",
  "thermalimaging.org.uk",
  "thermostatinstallation.co.uk",
  "thewoodfloorsanding.com",
  "tidyingservice.co.uk",
  "tilecleaninguae.com",
  "tilefitting.co.uk",
  "tileregrouting.uk",
  "tileresealing.co.uk",
  "tileresealing.uk",
  "tilingcompany.org.uk",
  "tilingservicesuae.com",
  "timber-windows.org.uk",
  "tippygift.com",
  "toilethire.org.uk",
  "totalhomeservices.uk",
  "tr19kitchencleaning.co.uk",
  "trashremoval.uk",
  "trauma-cleaning.uk",
  "treatingmould.co.uk",
  "treestumpremoval.org.uk",
  "trustatrader.org",
  "tvinstallation.org.uk",
  "tvinstallation.uk",
  "tvmountingae.com",
  "tvmountingcompany.com",
  "tv-mounting.org.uk",
  "tvmounting.org.uk",
  "tvmountingservice.co.uk",
  "uprightpianomovers.uk",
  "upvcspraying.uk",
  "urgentcleaners.co.uk",
  "urgentcleaners.uk",
  "vacant-property-security.co.uk",
  "vacuumcleaningservice.co.uk",
  "vanwithtaillift.co.uk",
  "vehicle-movers.co.uk",
  "vehicletransportation.uk",
  "venetianblindscleaning.co.uk",
  "ventcleaning.uk",
  "ventilation-cleaning.uk",
  "vomitcleaning.co.uk",
  "wallcrackrepair.co.uk",
  "wallmounting.co.uk",
  "wallpaperstripping.co.uk",
  "wardrobeassembly.co.uk",
  "washingmachinecleaning.com",
  "washingmachineinstallers.co.uk",
  "washingmachineremoval.co.uk",
  "washing-machine-repair.org.uk",
  "wasteclearancecompany.co.uk",
  "waste-clearance.org.uk",
  "waste-collectors.uk",
  "wastecollectors.uk",
  "wastedisposalservice.co.uk",
  "wastemanagement.org.uk",
  "waste-removals.uk",
  "watersoftening.co.uk",
  "weedremovalservices.co.uk",
  "whitegoodsremoval.co.uk",
  "windowrespraying.co.uk",
  "woodenblindscleaning.co.uk",
  "woodendoorfitters.co.uk",
  "woodflooringfitters.co.uk",
  "woodflooroiling.co.uk",
  "woodfloorsandingcompany.co.uk",
  "woodfloorsandingleeds.uk",
  "zensanumbingcream.com",
];

const serviceRules = [
  { key: "AC Cleaning                 ", test: d => /aircondition/i.test(d) },
  { key: "Appliance Services          ", test: d => /appliance/i.test(d) },
  { key: "Artex Removal               ", test: d => /artex/i.test(d) },
  { key: "Asbestos Removal            ", test: d => /asbestos/i.test(d) },
  { key: "Bathroom Services           ", test: d => /bathroom/i.test(d) },
  { key: "Bed Bug Treatment           ", test: d => /bedbug/i.test(d) },
  { key: "Biohazard Cleaning          ", test: d => /biohazard|crimescene|suicide|trauma|humanwaste|vomit/i.test(d) },
  { key: "Blind Cleaning              ", test: d => /blind/i.test(d) },
  { key: "Boiler & Heating            ", test: d => /boiler|centralheating|powerflush|radiator|thermostat/i.test(d) },
  { key: "Brick & Stone Cleaning      ", test: d => /brick|stone|facade|facadecleaning/i.test(d) },
  { key: "Building Survey             ", test: d => /survey|snagging|inspection|homebuyerreport|fullbuilding/i.test(d) },
  { key: "Caravan Cleaning            ", test: d => /caravan|motorhome|rv-cleaning/i.test(d) },
  { key: "Carpet Cleaning             ", test: d => /carpet/i.test(d) },
  { key: "Chimney Services            ", test: d => /chimney/i.test(d) },
  { key: "Cladding Services           ", test: d => /cladding/i.test(d) },
  { key: "Construction Cleaning       ", test: d => /construction|afterbuilder|afterconstruction|builders-clean|cleaningafterconstruction|sitecleaning/i.test(d) },
  { key: "Courier & Delivery          ", test: d => /courier|delivery|nextday|overnight|same-day-courier/i.test(d) },
  { key: "Curtain & Blind Fitting     ", test: d => /curtain/i.test(d) },
  { key: "Damp Proofing               ", test: d => /damp/i.test(d) },
  { key: "Decking & Patio             ", test: d => /decking|patio/i.test(d) },
  { key: "Demolition                  ", test: d => /demolition|softstripout/i.test(d) },
  { key: "Dishwasher Services         ", test: d => /dishwasher/i.test(d) },
  { key: "Dog Waste Removal           ", test: d => /dog.?poo|dogwaste|dogpoo/i.test(d) },
  { key: "Door Services               ", test: d => /door/i.test(d) },
  { key: "Drain & Plumbing            ", test: d => /drain|plumb/i.test(d) },
  { key: "Draughtproofing             ", test: d => /draughtproof/i.test(d) },
  { key: "Driveway Services           ", test: d => /driveway|asphalt|blockpaving|gravel/i.test(d) },
  { key: "Duct & Vent Cleaning        ", test: d => /duct|vent/i.test(d) && !/document|adventure/i.test(d) },
  { key: "Electrical Services         ", test: d => /electric|ledlight/i.test(d) },
  { key: "End of Tenancy Cleaning     ", test: d => /endoftenancy|posttenancy|movein|moveout|move-out/i.test(d) },
  { key: "Event Services              ", test: d => /event/i.test(d) },
  { key: "Extractor Fan Cleaning      ", test: d => /extractor|extractorfan|extractorhood|cookerhood/i.test(d) },
  { key: "Facade Cleaning             ", test: d => /facadecleaning/i.test(d) },
  { key: "Fence Services              ", test: d => /fence/i.test(d) },
  { key: "Fire Safety                 ", test: d => /fire/i.test(d) },
  { key: "Fish Tank Cleaning          ", test: d => /fishtank/i.test(d) },
  { key: "Flood & Water Damage        ", test: d => /flood|leakdamage/i.test(d) },
  { key: "Floor Sanding               ", test: d => /floorsanding|hardwoodfloorsanding|hardwood-floor-sanding|woodfloorsanding|parquetfloor/i.test(d) },
  { key: "Floor Tiling                ", test: d => /floortil|floortiling|ceramictiling/i.test(d) },
  { key: "Flooring Fitting            ", test: d => /flooringfitter|floorlayer|laminateflooring|lvtflooring|woodflooringfitter/i.test(d) },
  { key: "Flooring Repair             ", test: d => /flooringrepair|floorboardrepair/i.test(d) },
  { key: "Flooring Services           ", test: d => /floor/i.test(d) },
  { key: "Furniture Assembly          ", test: d => /furnitureassembly|flatpackfurniture|ikeaassembly|professionalfurnitureassembly/i.test(d) },
  { key: "Furniture Moving            ", test: d => /furnituremover|furnituremovers|movefurniture|officefurnituremover|professionalfurnituremover/i.test(d) },
  { key: "Furniture Removal           ", test: d => /furnituredisposal|furnituredismantling|furniture-collection|furniturepickup|furniturerelocation|sofaremoval/i.test(d) },
  { key: "Garage Services             ", test: d => /garage/i.test(d) },
  { key: "Garden Clearance            ", test: d => /gardenclearance|garden-clearance|gardenclearing|garden-clearing|gardenclearout|overgrowngarden/i.test(d) },
  { key: "Garden Cleaning             ", test: d => /gardencleaning|gardencleaningservice/i.test(d) },
  { key: "Garden Rooms & Annexes      ", test: d => /gardenroom|gardenannex|insulatedgardenroom|summer-house/i.test(d) },
  { key: "Garden Waste Removal        ", test: d => /gardenrubbish|gardenwastedisposal|gardenwasteremoval|gardenjunk|gardenfurnituredisposal/i.test(d) },
  { key: "Gas Safety                  ", test: d => /gassafety/i.test(d) },
  { key: "General Cleaning            ", test: d => /domestic.?clean|home.?clean|house.?clean|local.?clean|general.?clean|maid|housekeeper|needcleaner|cleanerservice/i.test(d) },
  { key: "General Waste Removal       ", test: d => /generalwaste|rubbish|rubble|trash|waste|litter|flytipping|refusecollect/i.test(d) },
  { key: "Glass Repair                ", test: d => /glassrepair/i.test(d) },
  { key: "Grass & Turf                ", test: d => /grass|turf|astroturf|fakegrass/i.test(d) },
  { key: "Greenhouse Services         ", test: d => /greenhouse/i.test(d) },
  { key: "Grout Cleaning              ", test: d => /grout/i.test(d) },
  { key: "Gutter Services             ", test: d => /gutter/i.test(d) },
  { key: "House Clearance             ", test: d => /houseclearance|house-clearance|hoarder|flatclearance|endoftenancyclearance/i.test(d) },
  { key: "House Removal               ", test: d => /houseremoval|housemove|housemoving|removal|maninvan|movingvan|moving-service|packingandmoving/i.test(d) },
  { key: "Hot Tub Services            ", test: d => /hottub/i.test(d) },
  { key: "Jet Washing                 ", test: d => /jetwashing|jet-washing|pressurewash|pressure-wash|powerwash|powerspraying|pressurecleaning|softwash|soft-washing/i.test(d) },
  { key: "Kitchen Cleaning            ", test: d => /kitchen/i.test(d) },
  { key: "Loft Services               ", test: d => /loft/i.test(d) },
  { key: "Marble Cleaning             ", test: d => /marble/i.test(d) },
  { key: "Mattress Cleaning           ", test: d => /mattress/i.test(d) },
  { key: "Media Wall                  ", test: d => /mediawall/i.test(d) },
  { key: "Mould Removal               ", test: d => /mould|mold/i.test(d) },
  { key: "Oven Cleaning               ", test: d => /oven|stovecleaning|rangeoven/i.test(d) },
  { key: "Painting                    ", test: d => /paint/i.test(d) },
  { key: "Pest Control                ", test: d => /pest/i.test(d) },
  { key: "Piano Moving                ", test: d => /piano/i.test(d) },
  { key: "Plastering                  ", test: d => /plaster/i.test(d) },
  { key: "Property Survey             ", test: d => /propertysurve|structuralsurvey|chartered.?surveyor|quantity.?surve/i.test(d) },
  { key: "Rendering                   ", test: d => /rendering|siliconerender/i.test(d) },
  { key: "Roof Cleaning               ", test: d => /roofcleaning|roofmoss/i.test(d) },
  { key: "Roof Survey                 ", test: d => /roofsurvey|roofsurveyor|metalroofsurvey|independentroofsurvey|independentroofinspe/i.test(d) },
  { key: "Roofing                     ", test: d => /roofing|thatchedroofing|leadflashing/i.test(d) },
  { key: "Scaffolding                 ", test: d => /scaffolding/i.test(d) },
  { key: "Security Services           ", test: d => /security/i.test(d) },
  { key: "Sealing & Resealing         ", test: d => /reseal|sealing|sealant|siliconereseal|regrouting/i.test(d) },
  { key: "Shelving & Storage          ", test: d => /shelving|shelfinstall|shelveinstall|shelfmount/i.test(d) },
  { key: "Shed Services               ", test: d => /shed/i.test(d) },
  { key: "Skip Hire                   ", test: d => /skiphire|hippobag|hipposack/i.test(d) },
  { key: "Solar Panel Cleaning        ", test: d => /solarpanel/i.test(d) },
  { key: "Sofa Cleaning               ", test: d => /sofa|couch/i.test(d) },
  { key: "Sound Proofing              ", test: d => /soundproof/i.test(d) },
  { key: "Stain Removal               ", test: d => /stainremoval|dirtremoval|oilstainremoval|petstainremoval/i.test(d) },
  { key: "Tiling Services             ", test: d => /tile|tiling/i.test(d) },
  { key: "Toilet Hire                 ", test: d => /toilet|portableloohi|portaloohire/i.test(d) },
  { key: "Tree & Plant Removal        ", test: d => /treestump|japanese-knotweed|ivy-removal|weedremoval/i.test(d) },
  { key: "TV Mounting                 ", test: d => /tvinstall|tvmount|tv-mount/i.test(d) },
  { key: "Upholstery Cleaning         ", test: d => /upholstery/i.test(d) },
  { key: "Vehicle Transport           ", test: d => /vehicletransport|motorbiketransport|car-movers/i.test(d) },
  { key: "Wallpaper & Painting        ", test: d => /wallpaper/i.test(d) },
  { key: "Washing Machine Services    ", test: d => /washingmachine/i.test(d) },
  { key: "Window Services             ", test: d => /window/i.test(d) },
];

function detectService(domain) {
  for (const rule of serviceRules) {
    if (rule.test(domain)) return rule.key;
  }
  return "General";
}

// Build site objects
const sites = rawSites.map(d => ({
  domain: d,
  service: detectService(d),
  url: "https://" + d
}));

// ─────────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────────
let activeFilter = "All";
let searchQuery  = "";
let sortAZ       = true;

// All unique services, sorted
const allServices = ["All", ...new Set(sites.map(s => s.service)).values()].sort((a,b) => a === "All" ? -1 : b === "All" ? 1 : a.localeCompare(b));

// Count per service
const counts = {};
allServices.forEach(sv => {
  counts[sv] = sv === "All" ? sites.length : sites.filter(s => s.service === sv).length;
});

// ─────────────────────────────────────────────────
// RENDER FILTERS
// ─────────────────────────────────────────────────
function renderFilters() {
  const track = document.getElementById("filterTrack");
  track.innerHTML = "";

  allServices.forEach(sv => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (sv === activeFilter ? " active" : "");
    btn.textContent = sv;
    btn.addEventListener("click", () => {
      activeFilter = sv;
      renderFilters();
      renderGrid();
      // scroll active button into view
      btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    });
    track.appendChild(btn);
  });

  updateNavState();
}

// Scroll step in px
const SCROLL_STEP = 200;

function updateNavState() {
  const track = document.getElementById("filterTrack");
  const prev  = document.getElementById("filterPrev");
  const next  = document.getElementById("filterNext");
  prev.disabled = track.scrollLeft <= 0;
  next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
}

document.getElementById("filterPrev").addEventListener("click", () => {
  const track = document.getElementById("filterTrack");
  track.scrollBy({ left: -SCROLL_STEP, behavior: "smooth" });
  setTimeout(updateNavState, 320);
});

document.getElementById("filterNext").addEventListener("click", () => {
  const track = document.getElementById("filterTrack");
  track.scrollBy({ left: SCROLL_STEP, behavior: "smooth" });
  setTimeout(updateNavState, 320);
});

document.getElementById("filterTrack").addEventListener("scroll", updateNavState);

// ─────────────────────────────────────────────────
// QUICK SORT (merge sort for stability)
// ─────────────────────────────────────────────────
function mergeSort(arr, dir) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left  = mergeSort(arr.slice(0, mid), dir);
  const right = mergeSort(arr.slice(mid), dir);
  return merge(left, right, dir);
}

function merge(l, r, dir) {
  const result = [];
  let i = 0, j = 0;
  while (i < l.length && j < r.length) {
    const cmp = l[i].domain.localeCompare(r[j].domain);
    if ((dir && cmp <= 0) || (!dir && cmp >= 0)) result.push(l[i++]);
    else result.push(r[j++]);
  }
  return [...result, ...l.slice(i), ...r.slice(j)];
}

// ─────────────────────────────────────────────────
// RENDER GRID
// ─────────────────────────────────────────────────
const svgArrow = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>`;

function renderGrid() {
  const grid = document.getElementById("linksGrid");
  const noRes = document.getElementById("noResults");

  let filtered = sites.filter(s => {
    const matchService = activeFilter === "All" || s.service === activeFilter;
    const matchSearch  = s.domain.toLowerCase().includes(searchQuery.toLowerCase());
    return matchService && matchSearch;
  });

  filtered = mergeSort(filtered, sortAZ);

  grid.querySelectorAll(".link-card").forEach(c => c.remove());
  document.getElementById("visibleCount").textContent = filtered.length;

  if (filtered.length === 0) { noRes.style.display = "flex"; return; }
  noRes.style.display = "none";

  filtered.forEach((site, i) => {
    const a = document.createElement("a");
    a.className = "link-card";
    a.href = site.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.style.animationDelay = Math.min(i * 18, 280) + "ms";
    a.innerHTML = `<div class="card-dot"></div><div class="card-domain">${site.domain}</div><div class="card-arrow">${svgArrow}</div>`;
    grid.appendChild(a);
  });
}

// ─────────────────────────────────────────────────
// SORT TOGGLE
// ─────────────────────────────────────────────────
document.getElementById("sortToggle").addEventListener("click", () => {
  sortAZ = !sortAZ;
  document.getElementById("sortLabel").textContent = sortAZ ? "A → Z" : "Z → A";
  renderGrid();
});

// SEARCH
document.getElementById("searchInput").addEventListener("input", e => {
  searchQuery = e.target.value;
  renderGrid();
});

// ─────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────
renderFilters();
renderGrid();
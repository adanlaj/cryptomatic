const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const phraseThemes = [
  { theme: "Bank Vaults", items: ["VAULT", "LEDGER", "STAMP", "BOND"], places: ["TELLER DESK", "SAFE ROOM", "MARBLE HALL", "CASH OFFICE"], signals: ["OPENING", "NOON", "CLOSING"], roles: ["TELLER", "AUDITOR"] },
  { theme: "City Transit", items: ["TOKEN", "ROUTE MAP", "TICKET", "TURNSTILE"], places: ["SUBWAY GATE", "BUS DEPOT", "NORTH PLATFORM", "CLOCK KIOSK"], signals: ["RUSH HOUR", "SUNSET", "LAST BELL"], roles: ["DRIVER", "DISPATCHER"] },
  { theme: "Harbor Docks", items: ["ANCHOR", "CARGO LIST", "BRASS HOOK", "TIDE CHART"], places: ["PIER THREE", "FISH MARKET", "OLD CRANE", "HARBOR OFFICE"], signals: ["HIGH TIDE", "FOG HORN", "MOONRISE"], roles: ["SAILOR", "HARBOR MASTER"] },
  { theme: "Mountain Camps", items: ["COMPASS", "TIN CUP", "ROPE COIL", "TRAIL MARK"], places: ["PINE CAMP", "RIDGE PASS", "STONE CABIN", "ECHO LAKE"], signals: ["FIRST LIGHT", "COLD WIND", "STAR RISE"], roles: ["SCOUT", "RANGER"] },
  { theme: "Museum Nights", items: ["BRONZE KEY", "PAINT CHIP", "GLASS CASE", "CATALOG"], places: ["EAST WING", "SCULPTURE HALL", "TICKET BOOTH", "RESTORE ROOM"], signals: ["CLOSING", "MIDNIGHT", "RAIN FALL"], roles: ["CURATOR", "DOCENT"] },
  { theme: "Desert Caravans", items: ["WATER SKIN", "SILK MAP", "SUN STONE", "SADDLE BAG"], places: ["DUNE CAMP", "OASIS WELL", "SALT FLATS", "SHADED TENT"], signals: ["SUNRISE", "DUST STORM", "COOL NIGHT"], roles: ["GUIDE", "TRADER"] },
  { theme: "Space Stations", items: ["OXYGEN TAG", "STAR CHART", "FUSE CORE", "DATA PAD"], places: ["AIRLOCK", "DOCKING RING", "OBSERVATORY", "ENGINE BAY"], signals: ["ORBIT DAWN", "RED ALERT", "COMET PASS"], roles: ["PILOT", "ENGINEER"] },
  { theme: "Deep Sea Lab", items: ["DIVE TAG", "CORAL SAMPLE", "SONAR CLIP", "AIR TANK"], places: ["MOON POOL", "REEF GATE", "WET LAB", "SUB BAY"], signals: ["LOW TIDE", "BLUE LIGHT", "WHALE SONG"], roles: ["DIVER", "BIOLOGIST"] },
  { theme: "Forest Rangers", items: ["MAP PIN", "FIRE KIT", "ACORN MARK", "RANGER BADGE"], places: ["LOOKOUT TOWER", "CEDAR TRAIL", "CREEK BRIDGE", "MOSS CABIN"], signals: ["DAWN CHORUS", "THUNDER", "DUSK"], roles: ["RANGER", "TRACKER"] },
  { theme: "Castle Archives", items: ["WAX SEAL", "IRON KEY", "FOLIO PAGE", "SILVER CREST"], places: ["WEST TOWER", "GREAT HALL", "KEEP DOOR", "SCRIPT ROOM"], signals: ["BELL TOLL", "CANDLE LOW", "MOONLIGHT"], roles: ["SQUIRE", "ARCHIVIST"] },
  { theme: "Cyber Market", items: ["DATA CHIP", "ACCESS TOKEN", "NEON TAG", "PATCH FILE"], places: ["BYTE STALL", "SERVER NOOK", "GLASS LIFT", "NODE CAFE"], signals: ["PING STORM", "SHIFT CHANGE", "GREEN PULSE"], roles: ["BROKER", "CODER"] },
  { theme: "Jazz Club", items: ["BLUE NOTE", "BRASS MUTE", "SET LIST", "PIANO TOKEN"], places: ["BACK STAGE", "SIDE DOOR", "BAND STAND", "VELVET BOOTH"], signals: ["LAST SONG", "SMOKE BREAK", "SPOTLIGHT"], roles: ["SINGER", "BASSIST"] },
  { theme: "Winter Lodge", items: ["WOOL SCARF", "SNOW KEY", "FIRE LOG", "SKI PASS"], places: ["LODGE DESK", "FROST TRAIL", "ICE PORCH", "WARM DEN"], signals: ["SNOW FALL", "DARK SKY", "MORNING"], roles: ["HOST", "SKIER"] },
  { theme: "Carnival Midway", items: ["PRIZE TICKET", "RED BALLOON", "BRASS RING", "FUNNEL CAKE"], places: ["FERRIS GATE", "GAME BOOTH", "TENT ROW", "LIGHT ARCH"], signals: ["PARADE", "LAST RIDE", "BARKER CALL"], roles: ["BARKER", "JUGGLER"] },
  { theme: "Library Stacks", items: ["INDEX CARD", "BOOK PLATE", "DUSTY TOME", "DATE STAMP"], places: ["WEST STACKS", "READING ROOM", "MAP TABLE", "QUIET DESK"], signals: ["BELL RINGS", "LAMP GLOW", "CLOSING"], roles: ["LIBRARIAN", "SCHOLAR"] },
  { theme: "Rooftop Garden", items: ["SEED PACK", "CLAY POT", "WATER CAN", "VINE CLIP"], places: ["GREEN ROOF", "HERB WALL", "GLASS SHED", "BEE BOX"], signals: ["SUN BREAK", "LIGHT RAIN", "DUSK"], roles: ["GARDENER", "KEEPER"] },
  { theme: "Train Depot", items: ["RAIL PASS", "COAL TAG", "TIMETABLE", "LANTERN"], places: ["TRACK NINE", "TICKET HALL", "BAGGAGE ROOM", "CLOCK PLATFORM"], signals: ["WHISTLE", "LAST CALL", "STEAM CLOUD"], roles: ["CONDUCTOR", "PORTER"] },
  { theme: "Film Studio", items: ["SCRIPT PAGE", "CAMERA SLATE", "PROP KEY", "LIGHT GEL"], places: ["SOUND STAGE", "EDIT BAY", "PROP ROOM", "MAKEUP CHAIR"], signals: ["ACTION", "WRAP CALL", "SPOTLIGHT"], roles: ["DIRECTOR", "GAFFER"] },
  { theme: "Orchard Rows", items: ["APPLE CRATE", "PRUNING SHEAR", "SEED NOTE", "CIDER JUG"], places: ["NORTH ROW", "PACKING SHED", "OLD BARN", "WIND BREAK"], signals: ["HARVEST", "SUNSET", "BIRD CALL"], roles: ["PICKER", "FARMER"] },
  { theme: "Lighthouse Watch", items: ["LAMP WICK", "TIDE BOOK", "COPPER LENS", "SIGNAL FLAG"], places: ["LIGHT ROOM", "ROCK PATH", "KEEPER HOUSE", "FOG DECK"], signals: ["FOG HORN", "LOW TIDE", "DAWN"], roles: ["KEEPER", "WATCHMAN"] },
  { theme: "Volcano Lab", items: ["LAVA SAMPLE", "HEAT GLOVE", "ASH METER", "BASALT CORE"], places: ["OBSERVATORY", "CRATER RIM", "FIELD TENT", "STEAM VENT"], signals: ["TREMOR", "ASH FALL", "RED GLOW"], roles: ["GEOLOGIST", "TECHNICIAN"] },
  { theme: "Tea House", items: ["JADE CUP", "TEA TIN", "BAMBOO TRAY", "SILK NAPKIN"], places: ["GARDEN ROOM", "KETTLE BAR", "PAPER DOOR", "MOON TABLE"], signals: ["FIRST POUR", "RAIN TAP", "LANTERN"], roles: ["HOST", "SERVER"] },
  { theme: "Neon Alley", items: ["GLOW TAG", "METRO CARD", "RAIN COAT", "STREET CODE"], places: ["SIDE ALLEY", "NOODLE SIGN", "ROOF LADDER", "BACK DOOR"], signals: ["NEON FLICKER", "SIREN", "MIDNIGHT"], roles: ["COURIER", "LOOKOUT"] },
  { theme: "Pirate Cove", items: ["TREASURE MAP", "GOLD DOUBLOON", "BLACK FLAG", "RUSTY CUTLASS"], places: ["SAND CAVE", "PALM DOCK", "TIDE POOL", "CAPTAIN HUT"], signals: ["LOW TIDE", "PARROT CALL", "MOONRISE"], roles: ["MATE", "CAPTAIN"] },
  { theme: "Moon Base", items: ["LUNAR CORE", "SILVER BOOT", "AIR FILTER", "ROVER TAG"], places: ["DOME ONE", "CRATER EDGE", "SOLAR YARD", "HAB LOCK"], signals: ["EARTH RISE", "SHADOW FALL", "RADIO PING"], roles: ["ASTRONAUT", "BOTANIST"] },
  { theme: "Suburban Mystery", items: ["HOUSE KEY", "MAIL FLYER", "GARDEN HOSE", "PORCH LIGHT"], places: ["CUL DE SAC", "GARAGE DOOR", "MAPLE DRIVE", "ATTIC STAIRS"], signals: ["DOG BARK", "SPRINKLER", "DUSK"], roles: ["NEIGHBOR", "MAIL CARRIER"] },
  { theme: "Robot Factory", items: ["SERVO ARM", "LOGIC CHIP", "OIL CAN", "LASER TAG"], places: ["ASSEMBLY LINE", "TEST BAY", "PARTS CAGE", "CHARGE DOCK"], signals: ["SHIFT BELL", "GREEN LIGHT", "POWER CYCLE"], roles: ["FOREMAN", "ROBOT"] },
  { theme: "Ancient Ruins", items: ["STONE TABLET", "BRONZE IDOL", "RUBBING CLOTH", "SUN DISC"], places: ["TEMPLE STEP", "BROKEN GATE", "INNER COURT", "SAND CHAMBER"], signals: ["NOON SUN", "ECHO", "DUST RISE"], roles: ["EXPLORER", "SCRIBE"] },
  { theme: "Circus Tent", items: ["RED TICKET", "TRAPEZE CHALK", "RING ROPE", "STAR CAPE"], places: ["CENTER RING", "ANIMAL GATE", "CLOWN CART", "CANVAS DOOR"], signals: ["DRUM ROLL", "SPOTLIGHT", "FINAL BOW"], roles: ["ACROBAT", "RINGMASTER"] },
  { theme: "Weather Station", items: ["RAIN GAUGE", "WIND VANE", "BAROMETER", "STORM LOG"], places: ["RADAR ROOM", "ROOF MAST", "DATA DESK", "NORTH SHED"], signals: ["COLD FRONT", "THUNDER", "SUN BREAK"], roles: ["METEOROLOGIST", "OBSERVER"] },
  { theme: "Secret Bakery", items: ["RECIPE CARD", "FLOUR SACK", "SUGAR TIN", "OVEN MITT"], places: ["MIXING ROOM", "FRONT CASE", "BREAD RACK", "CELLAR DOOR"], signals: ["DAWN BAKE", "TIMER BELL", "YEAST RISE"], roles: ["BAKER", "TASTER"] },
  { theme: "Aquarium Hall", items: ["TANK KEY", "KELP SAMPLE", "PEARL TAG", "FILTER CAP"], places: ["REEF TANK", "TOUCH POOL", "GLASS TUNNEL", "FEED ROOM"], signals: ["FEED TIME", "BLUE LIGHT", "BUBBLE RUSH"], roles: ["KEEPER", "GUIDE"] },
  { theme: "Airfield Hangar", items: ["FLIGHT PLAN", "FUEL TAG", "WING PIN", "RADIO LOG"], places: ["HANGAR TWO", "RUNWAY END", "CONTROL ROOM", "TOOL CART"], signals: ["CLEAR SKY", "TAKEOFF", "RADIO CALL"], roles: ["PILOT", "MECHANIC"] },
  { theme: "Garden Maze", items: ["IVY CLIP", "STONE ROSE", "BRASS COMPASS", "GATE KEY"], places: ["HEDGE TURN", "FOUNTAIN", "WEST ARCH", "SUN DIAL"], signals: ["BIRD CALL", "NOON", "DUSK"], roles: ["GARDENER", "VISITOR"] },
  { theme: "Radio Tower", items: ["TUNING DIAL", "COPPER WIRE", "CALL SIGN", "BATTERY"], places: ["TOWER BASE", "BROADCAST ROOM", "ROOF MAST", "CABLE SHED"], signals: ["STATIC", "MORSE PING", "SIGN OFF"], roles: ["OPERATOR", "ENGINEER"] },
  { theme: "Diamond Mine", items: ["MINING TAG", "ROUGH GEM", "LAMP OIL", "PICK HANDLE"], places: ["LOWER SHAFT", "CART TRACK", "SORT ROOM", "ELEVATOR"], signals: ["SHIFT END", "ECHO", "LAMP FLASH"], roles: ["MINER", "SURVEYOR"] },
  { theme: "Solar Farm", items: ["PANEL KEY", "SUN METER", "CABLE CLIP", "BATTERY CELL"], places: ["PANEL ROW", "INVERTER SHED", "SERVICE ROAD", "CONTROL BOX"], signals: ["NOON SUN", "GRID PULSE", "SUNSET"], roles: ["TECH", "INSPECTOR"] },
  { theme: "Opera House", items: ["ARIA SCORE", "VELVET MASK", "BALCONY PASS", "GOLD PROGRAM"], places: ["ORCHESTRA PIT", "BOX SEAT", "STAGE DOOR", "COSTUME ROOM"], signals: ["OVERTURE", "CURTAIN", "FINAL NOTE"], roles: ["SOPRANO", "USHER"] },
  { theme: "Ski Patrol", items: ["RED BEACON", "SLOPE MAP", "WAX BLOCK", "RESCUE ROPE"], places: ["CHAIR LIFT", "PATROL HUT", "PINE RUN", "SNOW BRIDGE"], signals: ["WHITEOUT", "FIRST RUN", "LAST CHAIR"], roles: ["PATROLLER", "SKIER"] },
  { theme: "Jungle Temple", items: ["VINE KNIFE", "JADE MASK", "TORCH STUB", "STONE COIN"], places: ["TEMPLE DOOR", "RIVER BANK", "CANOPY PATH", "ALTAR ROOM"], signals: ["MONKEY CALL", "RAIN BURST", "SUN SHAFT"], roles: ["GUIDE", "EXPLORER"] },
  { theme: "Chess Club", items: ["BLACK ROOK", "SCORE SHEET", "CLOCK KEY", "QUEEN PIN"], places: ["SIDE TABLE", "BOARD ROOM", "TROPHY CASE", "QUIET CORNER"], signals: ["CHECKMATE", "ROUND BELL", "LAST MOVE"], roles: ["MASTER", "NOVICE"] },
  { theme: "Stadium Night", items: ["SEAT PASS", "FOAM HAND", "PLAY CARD", "TEAM FLAG"], places: ["GATE FOUR", "PRESS BOX", "LOWER ROW", "SNACK STAND"], signals: ["KICKOFF", "HALFTIME", "FINAL WHISTLE"], roles: ["COACH", "VENDOR"] },
  { theme: "Fashion House", items: ["SILK SWATCH", "GOLD BUTTON", "HEM RULER", "RUNWAY CARD"], places: ["FITTING ROOM", "CUT TABLE", "SHOWROOM", "MIRROR HALL"], signals: ["MODEL CALL", "FLASH BULB", "FINAL WALK"], roles: ["DESIGNER", "TAILOR"] },
  { theme: "Clock Shop", items: ["WINDING KEY", "BRASS GEAR", "CLOCK FACE", "PENDULUM"], places: ["REPAIR BENCH", "FRONT WINDOW", "TICK WALL", "PARTS DRAWER"], signals: ["NOON CHIME", "HOUR STRIKE", "CLOSING"], roles: ["WATCHMAKER", "APPRENTICE"] },
  { theme: "Arcade Floor", items: ["GAME TOKEN", "HIGH SCORE", "JOY STICK", "PRIZE CARD"], places: ["PINBALL ROW", "TOKEN BOOTH", "NEON WALL", "RACING CAB"], signals: ["BONUS ROUND", "POWER UP", "LAST GAME"], roles: ["PLAYER", "ATTENDANT"] },
  { theme: "Medical Lab", items: ["SAMPLE TUBE", "BLUE GLOVE", "TEST CHART", "DATA VIAL"], places: ["CLEAN ROOM", "FREEZER BAY", "MICROSCOPE", "CHECK DESK"], signals: ["ALARM BEEP", "SHIFT CHANGE", "GREEN RESULT"], roles: ["DOCTOR", "TECHNICIAN"] },
  { theme: "Quantum School", items: ["ATOM MODEL", "LASER NOTE", "FIELD COIL", "QUIZ PAPER"], places: ["PHYSICS LAB", "LECTURE HALL", "ROOF DOME", "LOCKER ROW"], signals: ["CLASS BELL", "LASER FLASH", "TEST TIME"], roles: ["TEACHER", "STUDENT"] },
  { theme: "Firehouse", items: ["HOSE NOZZLE", "BRASS BELL", "RED HELMET", "AXE HANDLE"], places: ["ENGINE BAY", "WATCH DESK", "LADDER WALL", "LOCKER ROOM"], signals: ["ALARM", "SHIFT BELL", "ALL CLEAR"], roles: ["CAPTAIN", "FIREFIGHTER"] },
  { theme: "Crystal Cave", items: ["QUARTZ SHARD", "LAMP PACK", "CAVE MAP", "ROPE KNOT"], places: ["LOW TUNNEL", "ECHO HALL", "UNDER POOL", "GLOW WALL"], signals: ["DRIP FALL", "LANTERN", "DEEP ECHO"], roles: ["CAVER", "GEOLOGIST"] },
  { theme: "River Ferry", items: ["FERRY PASS", "RIVER CHART", "OAR LOCK", "BELL ROPE"], places: ["NORTH DOCK", "FERRY HOUSE", "RIVER BEND", "TICKET GATE"], signals: ["MORNING FOG", "BELL RING", "LAST CROSSING"], roles: ["FERRYMAN", "PASSENGER"] }
];

const phraseTemplates = [
  (theme) => `FIND THE ${theme.items[0]} NEAR THE ${theme.places[0]}`,
  (theme) => `MOVE THE ${theme.items[1]} TO THE ${theme.places[1]}`,
  (theme) => `CHECK THE ${theme.places[2]} AFTER ${theme.signals[0]}`,
  (theme) => `${theme.roles[0]} HIDES THE ${theme.items[2]}`,
  (theme) => `WAIT BY THE ${theme.places[3]} UNTIL ${theme.signals[1]}`,
  (theme) => `THE ${theme.items[3]} UNLOCKS THE ${theme.places[0]}`,
  (theme) => `RETURN THE ${theme.items[0]} BEFORE ${theme.signals[2]}`,
  (theme) => `${theme.roles[1]} GUARDS THE ${theme.places[1]}`,
  (theme) => `MARK THE ${theme.items[1]} WITH THE ${theme.items[2]}`,
  (theme) => `FOLLOW THE ${theme.places[2]} TO THE ${theme.places[3]}`
];

function buildThemeKeys(theme) {
  const rawWords = [
    theme.theme,
    ...theme.items,
    ...theme.places,
    ...theme.signals,
    ...theme.roles
  ];
  const words = rawWords.flatMap((entry) => String(entry).split(/\s+/))
    .map((word) => sanitizeKey(word))
    .filter((word) => word.length >= 3 && word.length <= 9);
  return Array.from(new Set(words));
}

const phrases = phraseThemes.flatMap((theme) => phraseTemplates.map((template) => ({
  theme: theme.theme,
  plain: template(theme),
  keyOptions: buildThemeKeys(theme)
})));

const hintCosts = [180, 420, 800];
const buyTimeCost = 45;
const buyTimeSeconds = 45;
const careerDifficulties = ["easy", "standard", "expert"];
const difficultySettings = {
  easy: { seconds: 180, base: 35, speedBonus: 55 },
  standard: { seconds: 160, base: 90, speedBonus: 125 },
  expert: { seconds: 190, base: 290, speedBonus: 360 }
};
const state = {
  mission: null,
  score: 0,
  streak: 0,
  bestStreak: 0,
  round: 0,
  hints: 0,
  secondsLeft: 90,
  lastTick: performance.now(),
  history: [],
  expiring: false,
  caesarDrag: null,
  recentKeys: [],
  scratch: {
    cells: []
  }
};

const els = {
  cipherSelect: document.querySelector("#cipherSelect"),
  shiftInput: document.querySelector("#shiftInput"),
  caesarAssist: document.querySelector("#caesarAssist"),
  caesarWheel: document.querySelector("#caesarWheel"),
  caesarTopAlphabet: document.querySelector("#caesarTopAlphabet"),
  caesarBottomAlphabet: document.querySelector("#caesarBottomAlphabet"),
  caesarShiftSlider: document.querySelector("#caesarShiftSlider"),
  caesarShiftLabel: document.querySelector("#caesarShiftLabel"),
  caesarDecodeButton: document.querySelector("#caesarDecodeButton"),
  caesarPreview: document.querySelector("#caesarPreview"),
  keyInput: document.querySelector("#keyInput"),
  vigenereAssist: document.querySelector("#vigenereAssist"),
  vigenereKeyLabel: document.querySelector("#vigenereKeyLabel"),
  keyLengthInput: document.querySelector("#keyLengthInput"),
  keyAllAButton: document.querySelector("#keyAllAButton"),
  keyBuilder: document.querySelector("#keyBuilder"),
  keyStream: document.querySelector("#keyStream"),
  vigenerePreview: document.querySelector("#vigenerePreview"),
  substitutionInput: document.querySelector("#substitutionInput"),
  substitutionAssist: document.querySelector("#substitutionAssist"),
  substitutionLabel: document.querySelector("#substitutionLabel"),
  substitutionMap: document.querySelector("#substitutionMap"),
  substitutionPreview: document.querySelector("#substitutionPreview"),
  railInput: document.querySelector("#railInput"),
  railDecreaseButton: document.querySelector("#railDecreaseButton"),
  railIncreaseButton: document.querySelector("#railIncreaseButton"),
  railAssist: document.querySelector("#railAssist"),
  railLabel: document.querySelector("#railLabel"),
  railBoard: document.querySelector("#railBoard"),
  railReadout: document.querySelector("#railReadout"),
  inputText: document.querySelector("#inputText"),
  outputText: document.querySelector("#outputText"),
  clearButton: document.querySelector("#clearButton"),
  copyButton: document.querySelector("#copyButton"),
  scratchGrid: document.querySelector("#scratchGrid"),
  scratchLockCount: document.querySelector("#scratchLockCount"),
  scratchFillButton: document.querySelector("#scratchFillButton"),
  scratchClearButton: document.querySelector("#scratchClearButton"),
  scratchNotes: document.querySelector("#scratchNotes"),
  frequencyGrid: document.querySelector("#frequencyGrid"),
  letterCount: document.querySelector("#letterCount"),
  missionTheme: document.querySelector("#missionTheme"),
  missionBrief: document.querySelector("#missionBrief"),
  missionProfile: document.querySelector("#missionProfile"),
  missionBars: document.querySelector("#missionBars"),
  missionPatterns: document.querySelector("#missionPatterns"),
  cipherText: document.querySelector("#cipherText"),
  answerInput: document.querySelector("#answerInput"),
  submitAnswerButton: document.querySelector("#submitAnswerButton"),
  hintButton: document.querySelector("#hintButton"),
  buyTimeButton: document.querySelector("#buyTimeButton"),
  newMissionButton: document.querySelector("#newMissionButton"),
  gameFeedback: document.querySelector("#gameFeedback"),
  missionClock: document.querySelector("#missionClock"),
  hintCount: document.querySelector("#hintCount"),
  roundCount: document.querySelector("#roundCount"),
  missionLevel: document.querySelector("#missionLevel"),
  totalScore: document.querySelector("#totalScore"),
  topStreak: document.querySelector("#topStreak"),
  cipherBadge: document.querySelector("#cipherBadge"),
  missionHistory: document.querySelector("#missionHistory"),
  solvedCount: document.querySelector("#solvedCount")
};

function clampNumber(value, min, max, fallback) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) return fallback;
  return Math.min(max, Math.max(min, parsed));
}

function optionalNumber(value, min, max) {
  if (String(value).trim() === "") return null;
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) return null;
  return Math.min(max, Math.max(min, parsed));
}

function mod(value, size) {
  return ((value % size) + size) % size;
}

function shiftChar(char, shift) {
  const upper = char.toUpperCase();
  const index = alphabet.indexOf(upper);
  if (index === -1) return char;
  const shifted = alphabet[mod(index + shift, alphabet.length)];
  return char === upper ? shifted : shifted.toLowerCase();
}

function caesar(text, shift, direction) {
  const amount = direction === "decode" ? -shift : shift;
  return Array.from(text, (char) => shiftChar(char, amount)).join("");
}

function atbash(text) {
  return Array.from(text, (char) => {
    const upper = char.toUpperCase();
    const index = alphabet.indexOf(upper);
    if (index === -1) return char;
    const mapped = alphabet[alphabet.length - 1 - index];
    return char === upper ? mapped : mapped.toLowerCase();
  }).join("");
}

function normalizeSubstitutionAlphabet(value) {
  const unique = [];
  sanitizeKey(value).split("").forEach((letter) => {
    if (!unique.includes(letter)) unique.push(letter);
  });
  alphabet.split("").forEach((letter) => {
    if (!unique.includes(letter)) unique.push(letter);
  });
  return unique.slice(0, alphabet.length).join("");
}

function substitution(text, cipherAlphabet, direction) {
  const clean = normalizeSubstitutionAlphabet(cipherAlphabet);
  return Array.from(text, (char) => {
    const upper = char.toUpperCase();
    if (!alphabet.includes(upper)) return char;
    const index = direction === "decode" ? clean.indexOf(upper) : alphabet.indexOf(upper);
    const mapped = direction === "decode" ? alphabet[index] : clean[index];
    return char === upper ? mapped : mapped.toLowerCase();
  }).join("");
}

function shuffledAlphabet() {
  const letters = alphabet.split("");
  for (let index = letters.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [letters[index], letters[swapIndex]] = [letters[swapIndex], letters[index]];
  }
  return letters.join("");
}

function sanitizeKey(key) {
  return key.toUpperCase().replace(/[^A-Z]/g, "");
}

function cleanKey(key) {
  return sanitizeKey(key) || "A";
}

function vigenere(text, key, direction) {
  const clean = cleanKey(key);
  let keyIndex = 0;
  return Array.from(text, (char) => {
    const upper = char.toUpperCase();
    const index = alphabet.indexOf(upper);
    if (index === -1) return char;
    const keyShift = alphabet.indexOf(clean[keyIndex % clean.length]);
    keyIndex += 1;
    return shiftChar(char, direction === "decode" ? -keyShift : keyShift);
  }).join("");
}

function railFenceEncode(text, rails) {
  if (rails <= 1 || text.length <= 1) return text;
  const rows = Array.from({ length: rails }, () => []);
  let row = 0;
  let step = 1;
  Array.from(text).forEach((char) => {
    rows[row].push(char);
    if (row === 0) step = 1;
    if (row === rails - 1) step = -1;
    row += step;
  });
  return rows.map((items) => items.join("")).join("");
}

function railFenceDecode(text, rails) {
  if (rails <= 1 || text.length <= 1) return text;
  const chars = Array.from(text);
  const pattern = [];
  let row = 0;
  let step = 1;
  chars.forEach(() => {
    pattern.push(row);
    if (row === 0) step = 1;
    if (row === rails - 1) step = -1;
    row += step;
  });

  const counts = Array.from({ length: rails }, () => 0);
  pattern.forEach((rail) => {
    counts[rail] += 1;
  });

  const rows = [];
  let cursor = 0;
  counts.forEach((count) => {
    rows.push(chars.slice(cursor, cursor + count));
    cursor += count;
  });

  const rowCursors = Array.from({ length: rails }, () => 0);
  return pattern.map((rail) => {
    const char = rows[rail][rowCursors[rail]];
    rowCursors[rail] += 1;
    return char;
  }).join("");
}

function transform(text, cipher, mode) {
  if (cipher === "caesar") {
    const shift = getCaesarShift();
    return shift === null ? text : caesar(text, shift, mode);
  }
  if (cipher === "vigenere") {
    const key = getVigenereKey();
    return key ? vigenere(text, key, mode) : text;
  }
  if (cipher === "substitution") {
    return substitution(text, getSubstitutionAlphabet(), mode);
  }
  if (cipher === "atbash") {
    return atbash(text);
  }
  const rails = getRailCount();
  if (rails === null) return text;
  return mode === "decode" ? railFenceDecode(text, rails) : railFenceEncode(text, rails);
}

function getToolMode() {
  return document.querySelector('input[name="toolMode"]:checked').value;
}

function getDifficulty() {
  return document.querySelector('input[name="difficulty"]:checked').value;
}

function isMissionTimed() {
  return Boolean(state.mission);
}

function setToolMode(mode) {
  const input = document.querySelector(`input[name="toolMode"][value="${mode}"]`);
  if (input) input.checked = true;
}

function updateOptions() {
  const cipher = els.cipherSelect.value;
  document.querySelectorAll(".cipher-option").forEach((option) => {
    option.classList.add("is-hidden");
  });
  const activeOption = document.querySelector(`.option-${cipher}`);
  if (activeOption) activeOption.classList.remove("is-hidden");
  els.caesarAssist.classList.toggle("is-hidden", cipher !== "caesar");
  els.vigenereAssist.classList.toggle("is-hidden", cipher !== "vigenere");
  els.substitutionAssist.classList.toggle("is-hidden", cipher !== "substitution");
  els.railAssist.classList.toggle("is-hidden", cipher !== "rail");
}

function updateTool() {
  updateOptions();
  const cipher = els.cipherSelect.value;
  if (cipher === "vigenere") setVigenereKey(els.keyInput.value);
  const mode = getToolMode();
  els.outputText.value = transform(els.inputText.value, cipher, mode);
  renderCipherAssist(cipher);
  renderScratchPad();
  applyScratchLocksToOutput();
  renderFrequency(els.outputText.value || els.inputText.value);
  syncAnswerFromWorkbench();
}

function renderCipherAssist(cipher) {
  if (cipher === "caesar") renderCaesarAssist();
  if (cipher === "vigenere") renderVigenereAssist();
  if (cipher === "substitution") renderSubstitutionAssist();
  if (cipher === "rail") renderRailAssist();
}

function getCaesarShift() {
  return optionalNumber(els.shiftInput.value, 0, 25);
}

function getVigenereKey() {
  return sanitizeKey(els.keyInput.value).slice(0, 12);
}

function getSubstitutionAlphabet() {
  return normalizeSubstitutionAlphabet(els.substitutionInput.value);
}

function getRailCount() {
  return optionalNumber(els.railInput.value, 2, 8);
}

function syncRailButtons(rails = getRailCount()) {
  els.railDecreaseButton.disabled = rails === null || rails <= 2;
  els.railIncreaseButton.disabled = rails !== null && rails >= 8;
}

function setRailCount(value) {
  const rails = clampNumber(value, 2, 8, 2);
  els.railInput.value = rails;
  syncRailButtons(rails);
  updateTool();
}

function renderCaesarAssist() {
  const shift = getCaesarShift();
  const displayShift = shift ?? 0;
  els.caesarShiftSlider.value = displayShift;
  els.caesarShiftLabel.textContent = shift === null ? "Set shift" : `Shift ${shift}`;
  renderCaesarWheel(displayShift);
  els.caesarPreview.textContent = shift === null ? (els.inputText.value || " ") : (caesar(els.inputText.value, shift, "decode") || " ");
}

function setCaesarShift(shift) {
  els.shiftInput.value = mod(shift, alphabet.length);
  updateTool();
}

function renderCaesarWheel(shift) {
  els.caesarTopAlphabet.innerHTML = "";
  els.caesarBottomAlphabet.innerHTML = "";
  els.caesarBottomAlphabet.setAttribute("aria-valuenow", shift);

  alphabet.split("").forEach((letter, index) => {
    const topCell = document.createElement("span");
    topCell.className = "caesar-letter";
    if (index === 0) topCell.classList.add("is-anchor");
    topCell.textContent = letter;
    els.caesarTopAlphabet.appendChild(topCell);

    const bottomCell = document.createElement("span");
    bottomCell.className = "caesar-letter";
    if (index === 0) bottomCell.classList.add("is-anchor");
    bottomCell.textContent = alphabet[mod(index + shift, alphabet.length)];
    els.caesarBottomAlphabet.appendChild(bottomCell);
  });
}

function setVigenereKey(key) {
  els.keyInput.value = sanitizeKey(key).slice(0, 12);
}

function resizeVigenereKey() {
  const current = getVigenereKey();
  const length = optionalNumber(els.keyLengthInput.value, 1, 12);
  if (length === null) return;
  const padded = `${current || "A"}${"A".repeat(12)}`;
  setVigenereKey(padded.slice(0, length));
  updateTool();
}

function renderVigenereAssist() {
  const key = getVigenereKey();
  if (els.keyInput.value !== key) els.keyInput.value = key;
  if (!(document.activeElement === els.keyLengthInput && els.keyLengthInput.value.trim() === "")) {
    els.keyLengthInput.value = key ? key.length : "";
  }
  els.vigenereKeyLabel.textContent = key || "No key";
  renderVigenereSlots(key);
  renderVigenereStream(key);
  els.vigenerePreview.textContent = key ? (vigenere(els.inputText.value, key, "decode") || " ") : (els.inputText.value || " ");
}

function renderVigenereSlots(key) {
  els.keyBuilder.innerHTML = "";
  key.split("").forEach((letter, index) => {
    const label = document.createElement("label");
    label.className = "key-slot";

    const number = document.createElement("span");
    number.textContent = String(index + 1).padStart(2, "0");

    const select = document.createElement("select");
    select.dataset.keyIndex = index;
    select.setAttribute("aria-label", `Key letter ${index + 1}`);
    alphabet.split("").forEach((optionLetter) => {
      const option = document.createElement("option");
      option.value = optionLetter;
      option.textContent = optionLetter;
      select.appendChild(option);
    });
    select.value = letter;

    label.append(number, select);
    els.keyBuilder.appendChild(label);
  });
}

function renderVigenereStream(key) {
  els.keyStream.innerHTML = "";
  if (!key) return;
  let keyIndex = 0;
  const columns = [];

  Array.from(els.inputText.value.toUpperCase()).some((char) => {
    if (!alphabet.includes(char)) return false;
    if (columns.length >= 48) return true;

    const keyPosition = keyIndex % key.length;
    const keyLetter = key[keyPosition];
    const shift = alphabet.indexOf(keyLetter);
    columns.push({
      cipher: char,
      keyLetter,
      keyPosition,
      plain: shiftChar(char, -shift).toUpperCase()
    });
    keyIndex += 1;
    return false;
  });

  els.keyStream.style.setProperty("--vigenere-columns", Math.max(1, columns.length));

  [
    ["Cipher", "stream-cipher", (column) => column.cipher],
    ["Key", "stream-key", (column) => column],
    ["Plain", "stream-plain", (column) => column.plain]
  ].forEach(([label, className, getValue]) => {
    const row = document.createElement("div");
    row.className = `vigenere-row ${className}`;

    const rowLabel = document.createElement("span");
    rowLabel.className = "vigenere-row-label";
    rowLabel.textContent = label;
    row.appendChild(rowLabel);

    columns.forEach((column, index) => {
      const cell = document.createElement("span");
      cell.className = "stream-cell";

      if (className === "stream-key") {
        const select = document.createElement("select");
        select.className = "stream-select";
        select.dataset.keyIndex = column.keyPosition;
        select.setAttribute("aria-label", `Key letter ${column.keyPosition + 1} for encrypted letter ${index + 1}`);
        alphabet.split("").forEach((letter) => {
          const option = document.createElement("option");
          option.value = letter;
          option.textContent = letter;
          select.appendChild(option);
        });
        select.value = getValue(column).keyLetter;
        cell.appendChild(select);
      } else {
        cell.textContent = getValue(column);
      }

      row.appendChild(cell);
    });

    els.keyStream.appendChild(row);
  });
}

function renderSubstitutionAssist() {
  const cipherAlphabet = getSubstitutionAlphabet();
  if (els.substitutionInput.value !== cipherAlphabet) els.substitutionInput.value = cipherAlphabet;
  els.substitutionLabel.textContent = `${new Set(cipherAlphabet).size} letters`;
  els.substitutionMap.innerHTML = "";

  alphabet.split("").forEach((plain, index) => {
    const cell = document.createElement("span");
    cell.className = "substitution-cell";
    const top = document.createElement("b");
    top.textContent = plain;
    const bottom = document.createElement("small");
    bottom.textContent = cipherAlphabet[index];
    cell.append(top, bottom);
    els.substitutionMap.appendChild(cell);
  });

  els.substitutionPreview.textContent = substitution(els.inputText.value, cipherAlphabet, getToolMode()) || " ";
}

function getRailPattern(length, rails) {
  const pattern = [];
  let row = 0;
  let step = 1;
  Array.from({ length }).forEach(() => {
    pattern.push(row);
    if (row === 0) step = 1;
    if (row === rails - 1) step = -1;
    row += step;
  });
  return pattern;
}

function displayRailChar(char) {
  return char === " " ? "·" : char;
}

function buildRailDecodeCells(chars, rails, pattern) {
  const counts = Array.from({ length: rails }, () => 0);
  pattern.forEach((rail) => {
    counts[rail] += 1;
  });

  const rows = [];
  let cursor = 0;
  counts.forEach((count) => {
    rows.push(chars.slice(cursor, cursor + count));
    cursor += count;
  });

  const rowCursors = Array.from({ length: rails }, () => 0);
  return pattern.map((rail) => {
    const char = rows[rail][rowCursors[rail]] || "";
    rowCursors[rail] += 1;
    return { char, rail };
  });
}

function renderRailAssist() {
  const rails = getRailCount();
  const mode = getToolMode();
  const chars = Array.from(els.inputText.value).slice(0, 42);
  if (rails === null) {
    syncRailButtons(rails);
    els.railLabel.textContent = "Set rails";
    els.railBoard.innerHTML = "";
    els.railReadout.innerHTML = "";
    return;
  }
  const pattern = getRailPattern(chars.length, rails);
  const cells = mode === "decode"
    ? buildRailDecodeCells(chars, rails, pattern)
    : chars.map((char, index) => ({ char, rail: pattern[index] }));
  const readout = mode === "decode"
    ? cells.map((cell) => cell.char).join("")
    : railFenceEncode(chars.join(""), rails);

  syncRailButtons(rails);
  els.railLabel.textContent = `${rails} rails · ${mode}`;
  els.railBoard.innerHTML = "";
  els.railBoard.style.setProperty("--rail-columns", Math.max(1, chars.length));

  Array.from({ length: rails }).forEach((_, rail) => {
    const row = document.createElement("div");
    row.className = "rail-row";

    const label = document.createElement("span");
    label.className = "rail-row-label";
    label.textContent = `Rail ${rail + 1}`;
    row.appendChild(label);

    chars.forEach((_, index) => {
      const cell = document.createElement("span");
      cell.className = "rail-cell";
      if (cells[index]?.rail === rail) {
        cell.classList.add("has-char");
        if (mode === "decode") cell.classList.add("is-read");
        cell.textContent = displayRailChar(cells[index].char);
      }
      row.appendChild(cell);
    });

    els.railBoard.appendChild(row);
  });

  els.railReadout.innerHTML = "";
  Array.from(readout).slice(0, 42).forEach((char) => {
    const chip = document.createElement("span");
    chip.textContent = displayRailChar(char);
    els.railReadout.appendChild(chip);
  });
}

function renderFrequency(text) {
  const counts = Object.fromEntries(alphabet.split("").map((letter) => [letter, 0]));
  let total = 0;
  Array.from(text.toUpperCase()).forEach((char) => {
    if (counts[char] !== undefined) {
      counts[char] += 1;
      total += 1;
    }
  });

  const maxCount = Math.max(1, ...Object.values(counts));
  els.letterCount.textContent = `${total} ${total === 1 ? "letter" : "letters"}`;
  els.frequencyGrid.innerHTML = "";
  alphabet.split("").forEach((letter) => {
    const bar = document.createElement("div");
    bar.className = "freq-bar";
    const height = Math.max(2, Math.round((counts[letter] / maxCount) * 78));
    bar.innerHTML = `<i style="height:${height}px"></i><span>${letter}</span>`;
    els.frequencyGrid.appendChild(bar);
  });
}

function isScratchLetter(char) {
  return alphabet.includes(char.toUpperCase());
}

function displayScratchChar(char) {
  if (char === " ") return "·";
  return char || " ";
}

function sanitizeGuess(value) {
  return sanitizeKey(value).slice(0, 1);
}

function getScratchChars() {
  return Array.from(els.inputText.value).slice(0, 96);
}

function syncScratchCells(chars = getScratchChars()) {
  const previous = state.scratch.cells;
  state.scratch.cells = chars.map((char, index) => {
    if (!isScratchLetter(char)) return { guess: "", locked: false };
    const cell = previous[index] || {};
    return {
      guess: sanitizeGuess(cell.guess || ""),
      locked: Boolean(cell.locked)
    };
  });
}

function updateScratchLockCount() {
  const locked = state.scratch.cells.filter((cell) => cell.locked).length;
  els.scratchLockCount.textContent = `${locked} locked`;
}

function renderScratchPad() {
  const chars = getScratchChars();
  syncScratchCells(chars);
  els.scratchGrid.innerHTML = "";

  chars.forEach((char, index) => {
    const cellState = state.scratch.cells[index];
    const cell = document.createElement("div");
    cell.className = "scratch-cell";
    if (cellState.locked) cell.classList.add("is-locked");
    if (!isScratchLetter(char)) cell.classList.add("is-fixed");

    const source = document.createElement("span");
    source.className = "scratch-source";
    source.textContent = displayScratchChar(char).toUpperCase();
    cell.appendChild(source);

    if (isScratchLetter(char)) {
      const guess = document.createElement("input");
      guess.className = "scratch-guess";
      guess.type = "text";
      guess.maxLength = 1;
      guess.autocomplete = "off";
      guess.spellcheck = false;
      guess.dataset.scratchIndex = index;
      guess.value = cellState.guess;
      guess.readOnly = cellState.locked;
      guess.setAttribute("aria-label", `Guess for ${char.toUpperCase()} at position ${index + 1}`);

      const lock = document.createElement("label");
      lock.className = "scratch-lock";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = cellState.locked;
      checkbox.dataset.scratchLockIndex = index;
      checkbox.setAttribute("aria-label", `Lock guess at position ${index + 1}`);
      const check = document.createElement("span");
      check.textContent = "✓";
      lock.append(checkbox, check);

      cell.append(guess, lock);
    } else {
      const placeholder = document.createElement("span");
      placeholder.className = "scratch-placeholder";
      placeholder.textContent = displayScratchChar(char);
      cell.appendChild(placeholder);
    }

    els.scratchGrid.appendChild(cell);
  });

  updateScratchLockCount();
}

function applyScratchLocksToOutput() {
  const chars = getScratchChars();
  if (!chars.length) return;
  syncScratchCells(chars);

  const lockedValues = new Map();
  state.scratch.cells.forEach((cell, index) => {
    const source = chars[index]?.toUpperCase();
    if (!source || !isScratchLetter(source) || !cell.locked || !cell.guess) return;
    if (!lockedValues.has(source)) lockedValues.set(source, cell.guess.toUpperCase());
  });

  const outputChars = Array.from(els.outputText.value);
  const merged = chars.map((char, index) => {
    const lockedValue = lockedValues.get(char.toUpperCase());
    if (isScratchLetter(char) && lockedValue) return lockedValue;
    return outputChars[index] ?? char;
  });

  if (lockedValues.size) {
    els.outputText.value = merged.join("");
  }
}

function fillScratchFromOutput() {
  const chars = getScratchChars();
  syncScratchCells(chars);
  const output = Array.from(els.outputText.value);
  state.scratch.cells.forEach((cell, index) => {
    if (!isScratchLetter(chars[index]) || cell.locked) return;
    cell.guess = sanitizeGuess(output[index] || "");
  });
  renderScratchPad();
}

function clearScratchPad() {
  state.scratch.cells = state.scratch.cells.map((cell) => {
    if (cell.locked) return cell;
    return { guess: "", locked: false };
  });
  renderScratchPad();
}

function applyScratchGuess(index, guess) {
  const chars = getScratchChars();
  const source = chars[index]?.toUpperCase();
  if (!source || !isScratchLetter(source)) return;

  state.scratch.cells.forEach((cell, cellIndex) => {
    if (chars[cellIndex]?.toUpperCase() !== source || cell.locked) return;
    cell.guess = guess;
  });

  els.scratchGrid.querySelectorAll(".scratch-guess").forEach((input) => {
    const inputIndex = Number.parseInt(input.dataset.scratchIndex, 10);
    const cell = state.scratch.cells[inputIndex];
    if (chars[inputIndex]?.toUpperCase() !== source || cell.locked) return;
    input.value = guess;
  });
}

function normalizeAnswer(text) {
  return text.toUpperCase().replace(/[^A-Z0-9]+/g, " ").trim().replace(/\s+/g, " ");
}

function compactLetters(text) {
  return text.toUpperCase().replace(/[^A-Z]/g, "");
}

function syncAnswerFromWorkbench() {
  if (!state.mission || getToolMode() !== "decode") return;
  const missionCipher = compactLetters(state.mission.encrypted);
  const workbenchInput = compactLetters(els.inputText.value);
  const workbenchOutput = els.outputText.value.trim();
  const outputLetters = compactLetters(workbenchOutput);
  if (!missionCipher || workbenchInput !== missionCipher) return;
  if (!outputLetters || outputLetters === missionCipher) return;
  els.answerInput.value = workbenchOutput;
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function randomThemeKey(phrase, difficulty) {
  const minLength = difficulty === "expert" ? 5 : 3;
  const maxLength = difficulty === "expert" ? 9 : 6;
  const matching = phrase.keyOptions.filter((key) => key.length >= minLength && key.length <= maxLength);
  const options = matching.length ? matching : (phrase.keyOptions.length ? phrase.keyOptions : ["KEY"]);
  const available = options.filter((key) => !state.recentKeys.includes(`${phrase.theme}:${key}`));
  const key = randomItem(available.length ? available : options);
  const recentKey = `${phrase.theme}:${key}`;
  state.recentKeys.unshift(recentKey);
  state.recentKeys = state.recentKeys.slice(0, 18);
  return key;
}

function buildSubstitutionClues(plain, encrypted, limit = 5) {
  const preferredPlain = "ETAOINSHRDLUCM";
  const pairs = [];
  const seenCipher = new Set();
  const letters = Array.from(plain.toUpperCase());
  const cipherLetters = Array.from(encrypted.toUpperCase());

  preferredPlain.split("").forEach((target) => {
    letters.some((letter, index) => {
      const cipher = cipherLetters[index];
      if (letter !== target || !alphabet.includes(cipher) || seenCipher.has(cipher)) return false;
      seenCipher.add(cipher);
      pairs.push({ cipher, plain: letter });
      return pairs.length >= limit;
    });
  });

  letters.some((letter, index) => {
    const cipher = cipherLetters[index];
    if (!alphabet.includes(letter) || !alphabet.includes(cipher) || seenCipher.has(cipher)) return false;
    seenCipher.add(cipher);
    pairs.push({ cipher, plain: letter });
    return pairs.length >= limit;
  });

  return pairs.slice(0, limit);
}

function formatSubstitutionClues(clues) {
  return clues.map((clue) => `${clue.cipher}=${clue.plain}`).join(", ");
}

function formatMoney(value) {
  return `$${Math.max(0, value).toLocaleString()}`;
}

function getHintCost() {
  return hintCosts[state.hints] ?? null;
}

function formatDifficulty(difficulty) {
  if (difficulty === "easy") return "Easy";
  if (difficulty === "standard") return "Std";
  return "Expert";
}

function formatKeyLetters(key) {
  return sanitizeKey(key).split("").join(" ");
}

function vigenereHint(mission) {
  if (state.hints === 1) return "The code is encoded via Vigenere cipher.";
  if (state.hints === 2) return `The Vigenere keyword has ${mission.key.length} letters.`;
  return `Keyword letters: ${formatKeyLetters(mission.key)}.`;
}

function buildMission() {
  const selectedDifficulty = getDifficulty();
  const difficulty = selectedDifficulty === "career" ? randomItem(careerDifficulties) : selectedDifficulty;
  const phrase = randomItem(phrases);
  const settings = difficultySettings[difficulty];
  const plain = phrase.plain;
  let cipher = "caesar";
  let encrypted = "";
  let shift = 0;
  let key = "";
  let rails = 3;
  let substitutionAlphabet = "";
  let substitutionClues = [];
  let seconds = settings.seconds;

  if (difficulty === "easy") {
    shift = 1 + Math.floor(Math.random() * 4);
    encrypted = caesar(plain, shift, "encode");
  } else if (difficulty === "standard") {
    cipher = randomItem(["caesar", "vigenere", "atbash", "rail", "substitution"]);
    if (cipher === "caesar") {
      shift = 3 + Math.floor(Math.random() * 7);
      encrypted = caesar(plain, shift, "encode");
    } else if (cipher === "vigenere") {
      key = randomThemeKey(phrase, difficulty);
      encrypted = vigenere(plain, key, "encode");
    } else if (cipher === "rail") {
      rails = 2 + Math.floor(Math.random() * 2);
      encrypted = railFenceEncode(plain, rails);
    } else if (cipher === "substitution") {
      substitutionAlphabet = shuffledAlphabet();
      encrypted = substitution(plain, substitutionAlphabet, "encode");
      substitutionClues = buildSubstitutionClues(plain, encrypted, 5);
    } else {
      encrypted = atbash(plain);
    }
  } else {
    cipher = randomItem(["vigenere", "rail", "substitution"]);
    if (cipher === "vigenere") {
      key = randomThemeKey(phrase, difficulty);
      encrypted = vigenere(plain, key, "encode");
    } else if (cipher === "rail") {
      rails = 4 + Math.floor(Math.random() * 3);
      encrypted = railFenceEncode(plain, rails);
    } else {
      substitutionAlphabet = shuffledAlphabet();
      encrypted = substitution(plain, substitutionAlphabet, "encode");
      substitutionClues = buildSubstitutionClues(plain, encrypted, 7);
    }
  }

  const keyClues = phrase.keyOptions.slice(0, 7);
  if (key && !keyClues.includes(key)) {
    keyClues[Math.max(0, keyClues.length - 1)] = key;
  }
  const leadWord = key || randomItem(keyClues) || sanitizeKey(phrase.theme.split(/\s+/)[0]);
  return { plain, encrypted, cipher, shift, key, keyClues, leadWord, rails, substitutionAlphabet, substitutionClues, difficulty, selectedDifficulty, theme: phrase.theme, seconds };
}

function cipherName(mission) {
  if (!mission) return "Unknown";
  if (mission.cipher === "caesar") return "Caesar";
  if (mission.cipher === "vigenere") return "Vigenere";
  if (mission.cipher === "substitution") return "Substitution";
  if (mission.cipher === "atbash") return "Atbash";
  return "Rail Fence";
}

function missionBrief(mission) {
  const leadWord = mission.leadWord || mission.key || sanitizeKey(mission.theme.split(/\s+/)[0]);
  if (mission.cipher === "vigenere") {
    return `The ${mission.theme} file arrived with a witness note circling the case word ${leadWord}. That word kept turning up around the scene, so line it under the encoded message and let it repeat while you test the plain text. Faster clean solves pay more; after the deadline pays $0.`;
  }
  if (mission.cipher === "rail") {
    return `The ${mission.theme} file was found on a torn strip labeled ${leadWord}, with letters climbing and dropping across ${mission.rails} faint guide rails. Rebuild the zigzag shape first, then read the rows back into a cleaner message. Faster clean solves pay more; after the deadline pays $0.`;
  }
  if (mission.cipher === "atbash") {
    return `The ${mission.theme} file was tucked behind a mirror beside a card marked ${leadWord}, with A and Z written on opposite corners of the frame. The note feels less shifted than flipped, so test the alphabet from both ends before chasing stranger patterns. Faster clean solves pay more; after the deadline pays $0.`;
  }
  if (mission.cipher === "substitution") {
    return `The ${mission.theme} file came with a smudged evidence card labeled ${leadWord} and a few recovered letter values: ${formatSubstitutionClues(mission.substitutionClues)}. Treat each value as cipher letter = plain letter, then use repeated letters and short words to fill the gaps. Faster clean solves pay more; after the deadline pays $0.`;
  }
  return `The ${mission.theme} file has the neat look of a message pushed through one steady alphabet offset, with ${leadWord} circled in the margin. A witness counted the same small number of steps on every letter, so the wheel should be your first lead. Faster clean solves pay more; after the deadline pays $0.`;
}

function startMission() {
  state.mission = buildMission();
  state.round += 1;
  state.hints = 0;
  state.expiring = false;
  state.secondsLeft = state.mission.seconds;
  state.lastTick = performance.now();
  els.cipherText.textContent = state.mission.encrypted;
  els.answerInput.value = "";
  els.answerInput.focus();
  setFeedback("", "");
  renderMissionInspector();
  updateMissionUi();
  loadMissionIntoTool();
  els.answerInput.focus();
}

function updateMissionUi() {
  els.missionClock.textContent = Math.max(0, Math.ceil(state.secondsLeft ?? 0));
  els.hintCount.textContent = state.hints;
  els.roundCount.textContent = state.round;
  els.missionLevel.textContent = state.mission ? formatDifficulty(state.mission.difficulty) : "Std";
  els.totalScore.textContent = formatMoney(state.score);
  els.topStreak.textContent = state.bestStreak;
  els.cipherBadge.textContent = state.hints > 0 ? cipherName(state.mission) : (state.mission?.theme || "Unknown");
  els.missionTheme.textContent = state.mission?.theme || "Unknown";
  els.missionBrief.textContent = state.mission ? missionBrief(state.mission) : "";
  els.solvedCount.textContent = `${state.history.length} solved`;
  const nextHintCost = getHintCost();
  els.hintButton.textContent = nextHintCost === null ? "Hints Used" : `Hint ${formatMoney(nextHintCost)}`;
  els.hintButton.disabled = nextHintCost === null;
  els.buyTimeButton.textContent = `Buy Time ${formatMoney(buyTimeCost)}`;
  els.buyTimeButton.disabled = !isMissionTimed() || state.score < buyTimeCost || state.expiring;
}

function setFeedback(message, tone) {
  els.gameFeedback.textContent = message;
  els.gameFeedback.className = `feedback${tone ? ` is-${tone}` : ""}`;
}

function scoreMission() {
  if (state.expiring || state.secondsLeft <= 0) return 0;
  const settings = difficultySettings[state.mission.difficulty];
  const speedRatio = Math.max(0, state.secondsLeft / state.mission.seconds);
  const speedBonus = Math.round(settings.speedBonus * speedRatio);
  const streakBonus = Math.min(75, state.streak * 15);
  return settings.base + speedBonus + streakBonus;
}

function submitAnswer() {
  if (!state.mission) return;
  const answer = normalizeAnswer(els.answerInput.value);
  const target = normalizeAnswer(state.mission.plain);
  if (!answer) {
    setFeedback("Plaintext needed.", "warn");
    return;
  }
  if (answer !== target) {
    state.streak = 0;
    setFeedback("Not yet.", "bad");
    updateMissionUi();
    return;
  }

  const points = scoreMission();
  state.score += points;
  state.streak = points > 0 ? state.streak + 1 : 0;
  state.bestStreak = Math.max(state.bestStreak, state.streak);
  state.history.unshift({
    cipher: cipherName(state.mission),
    theme: state.mission.theme,
    text: state.mission.plain,
    points
  });
  state.history = state.history.slice(0, 6);
  renderHistory();
  setFeedback(points > 0 ? `Contract paid. +${formatMoney(points)}` : "Solved after deadline. $0 paid.", points > 0 ? "good" : "warn");
  updateMissionUi();
  window.setTimeout(startMission, 900);
}

function useHint() {
  if (!state.mission || state.hints >= 3) return;
  const cost = getHintCost();
  if (cost === null) return;
  if (state.score < cost) {
    setFeedback(`Need ${formatMoney(cost)} for that hint.`, "warn");
    updateMissionUi();
    return;
  }
  state.score -= cost;
  state.hints += 1;
  const mission = state.mission;
  if (state.hints === 1) {
    const message = mission.cipher === "vigenere" ? vigenereHint(mission) : cipherName(mission);
    setFeedback(`${formatMoney(cost)} spent: ${message}`, "warn");
  } else if (state.hints === 2) {
    if (mission.cipher === "caesar") setFeedback(`${formatMoney(cost)} spent: Shift ${mission.shift}`, "warn");
    else if (mission.cipher === "vigenere") setFeedback(`${formatMoney(cost)} spent: ${vigenereHint(mission)}`, "warn");
    else if (mission.cipher === "rail") setFeedback(`${formatMoney(cost)} spent: ${mission.rails} rails`, "warn");
    else if (mission.cipher === "substitution") setFeedback(`${formatMoney(cost)} spent: Known values ${formatSubstitutionClues(mission.substitutionClues)}. Use each cipher letter as the left side and fill the matching plain letter.`, "warn");
    else setFeedback(`${formatMoney(cost)} spent: A maps to Z.`, "warn");
  } else {
    if (mission.cipher === "vigenere") {
      setFeedback(`${formatMoney(cost)} spent: ${vigenereHint(mission)}`, "warn");
    } else {
      const firstWord = mission.plain.split(" ")[0];
      setFeedback(`${formatMoney(cost)} spent: ${firstWord[0]}${"•".repeat(Math.max(0, firstWord.length - 1))}`, "warn");
    }
  }
  updateMissionUi();
}

function buyTime() {
  if (!isMissionTimed() || state.expiring || state.score < buyTimeCost) return;
  state.score -= buyTimeCost;
  state.secondsLeft += buyTimeSeconds;
  setFeedback(`${formatMoney(buyTimeCost)} spent: +${buyTimeSeconds} seconds`, "warn");
  updateMissionUi();
}

function expireMission() {
  if (!isMissionTimed() || state.expiring) return;
  state.expiring = true;
  state.streak = 0;
  setFeedback("Deadline passed. Solve it for practice, but this contract pays $0.", "bad");
  updateMissionUi();
}

function renderHistory() {
  els.missionHistory.innerHTML = "";
  state.history.forEach((item) => {
    const entry = document.createElement("li");
    entry.innerHTML = `<span>${item.cipher}</span><code>${item.text}</code><strong>+${formatMoney(item.points)}</strong>`;
    els.missionHistory.appendChild(entry);
  });
}

function getLetterStats(text) {
  const counts = {};
  alphabet.split("").forEach((letter) => {
    counts[letter] = 0;
  });

  let total = 0;
  Array.from(text.toUpperCase()).forEach((char) => {
    if (counts[char] === undefined) return;
    counts[char] += 1;
    total += 1;
  });

  return { counts, total };
}

function getRepeatedGroups(text) {
  const compact = text.toUpperCase().replace(/[^A-Z]/g, "");
  const groups = new Map();

  [2, 3].forEach((size) => {
    for (let index = 0; index <= compact.length - size; index += 1) {
      const group = compact.slice(index, index + size);
      groups.set(group, (groups.get(group) || 0) + 1);
    }
  });

  return Array.from(groups.entries())
    .filter(([, count]) => count > 1)
    .sort((first, second) => second[1] - first[1] || first[0].localeCompare(second[0]))
    .slice(0, 8);
}

function renderMissionInspector() {
  const text = state.mission ? state.mission.encrypted : "";
  const { counts, total } = getLetterStats(text);
  const maxCount = Math.max(1, ...Object.values(counts));

  els.missionProfile.textContent = `${total} ${total === 1 ? "letter" : "letters"}`;
  els.missionBars.innerHTML = "";
  alphabet.split("").forEach((letter) => {
    const bar = document.createElement("div");
    const value = counts[letter];
    const height = value ? Math.max(5, Math.round((value / maxCount) * 76)) : 3;
    bar.className = `mission-bar${value === maxCount && value > 0 ? " is-hot" : ""}`;
    bar.title = `${letter}: ${value}`;
    bar.innerHTML = `<i style="height: ${height}px"></i><span>${letter}</span>`;
    els.missionBars.appendChild(bar);
  });

  const repeats = getRepeatedGroups(text);
  els.missionPatterns.innerHTML = "";
  const chips = repeats.length ? repeats : [["No repeats", 0]];
  chips.forEach(([group, count]) => {
    const chip = document.createElement("span");
    chip.className = "pattern-chip";
    chip.textContent = count ? `${group} x${count}` : group;
    els.missionPatterns.appendChild(chip);
  });
}

function loadMissionIntoTool() {
  if (!state.mission) return;
  els.inputText.value = state.mission.encrypted;
  setToolMode("decode");
  els.cipherSelect.value = "caesar";
  els.shiftInput.value = "";
  els.keyInput.value = "";
  els.substitutionInput.value = "";
  els.railInput.value = "";
  updateTool();
}

function wireSegmentedLabels() {
  document.querySelectorAll(".segmented label").forEach((label) => {
    label.addEventListener("click", () => {
      const input = label.querySelector('input[type="radio"]');
      if (!input || input.checked) return;
      input.checked = true;
      input.dispatchEvent(new Event("change", { bubbles: true }));
    });
  });
}

function runClock(now) {
  const elapsed = (now - state.lastTick) / 1000;
  state.lastTick = now;
  if (isMissionTimed() && !state.expiring) {
    state.secondsLeft -= elapsed;
    if (state.secondsLeft <= 0) {
      state.secondsLeft = 0;
      expireMission();
    }
    updateMissionUi();
  }
  requestAnimationFrame(runClock);
}

function wireEvents() {
  wireSegmentedLabels();

  [
    els.cipherSelect,
    els.shiftInput,
    els.keyInput,
    els.substitutionInput,
    els.railInput,
    els.inputText
  ].forEach((element) => {
    element.addEventListener("input", updateTool);
    element.addEventListener("change", updateTool);
  });

  document.querySelectorAll('input[name="toolMode"]').forEach((element) => {
    element.addEventListener("change", updateTool);
  });

  document.querySelectorAll('input[name="difficulty"]').forEach((element) => {
    element.addEventListener("change", () => {
      startMission();
    });
  });

  els.railDecreaseButton.addEventListener("click", () => {
    const rails = getRailCount();
    if (rails === null) return;
    setRailCount(rails - 1);
  });

  els.railIncreaseButton.addEventListener("click", () => {
    const rails = getRailCount();
    setRailCount((rails ?? 1) + 1);
  });

  els.caesarShiftSlider.addEventListener("input", () => {
    els.shiftInput.value = els.caesarShiftSlider.value;
    updateTool();
  });

  els.caesarBottomAlphabet.addEventListener("pointerdown", (event) => {
    const rect = els.caesarBottomAlphabet.getBoundingClientRect();
    state.caesarDrag = {
      startX: event.clientX,
      startShift: getCaesarShift() ?? 0,
      cellWidth: Math.max(1, rect.width / alphabet.length)
    };
    els.caesarBottomAlphabet.classList.add("is-dragging");
    els.caesarBottomAlphabet.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  });

  els.caesarBottomAlphabet.addEventListener("pointermove", (event) => {
    if (!state.caesarDrag) return;
    const delta = Math.round((state.caesarDrag.startX - event.clientX) / state.caesarDrag.cellWidth);
    setCaesarShift(state.caesarDrag.startShift + delta);
  });

  ["pointerup", "pointercancel"].forEach((eventName) => {
    els.caesarBottomAlphabet.addEventListener(eventName, (event) => {
      state.caesarDrag = null;
      els.caesarBottomAlphabet.classList.remove("is-dragging");
      els.caesarBottomAlphabet.releasePointerCapture?.(event.pointerId);
    });
  });

  els.caesarBottomAlphabet.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      setCaesarShift((getCaesarShift() ?? 0) - 1);
      event.preventDefault();
    }
    if (event.key === "ArrowRight") {
      setCaesarShift((getCaesarShift() ?? 0) + 1);
      event.preventDefault();
    }
  });

  els.caesarDecodeButton.addEventListener("click", () => {
    setToolMode("decode");
    updateTool();
  });

  els.keyLengthInput.addEventListener("input", resizeVigenereKey);
  els.keyLengthInput.addEventListener("change", resizeVigenereKey);

  els.keyAllAButton.addEventListener("click", () => {
    const length = clampNumber(els.keyLengthInput.value, 1, 12, cleanKey(els.keyInput.value).length);
    setVigenereKey("A".repeat(length));
    updateTool();
  });

  els.keyBuilder.addEventListener("change", (event) => {
    if (!event.target.matches("select")) return;
    const key = Array.from(els.keyBuilder.querySelectorAll("select"))
      .map((select) => select.value)
      .join("");
    setVigenereKey(key);
    updateTool();
  });

  els.keyStream.addEventListener("change", (event) => {
    if (!event.target.matches(".stream-select")) return;
    const keyIndex = Number.parseInt(event.target.dataset.keyIndex, 10);
    const key = getVigenereKey().split("");
    if (!key[keyIndex]) return;
    key[keyIndex] = event.target.value;
    setVigenereKey(key.join(""));
    updateTool();
  });

  els.scratchGrid.addEventListener("input", (event) => {
    if (!event.target.matches(".scratch-guess")) return;
    const index = Number.parseInt(event.target.dataset.scratchIndex, 10);
    if (!state.scratch.cells[index] || state.scratch.cells[index].locked) return;
    const guess = sanitizeGuess(event.target.value);
    event.target.value = guess;
    applyScratchGuess(index, guess);
  });

  els.scratchGrid.addEventListener("change", (event) => {
    if (!event.target.matches('[data-scratch-lock-index]')) return;
    const index = Number.parseInt(event.target.dataset.scratchLockIndex, 10);
    if (!state.scratch.cells[index]) return;
    state.scratch.cells[index].locked = event.target.checked;
    updateTool();
  });

  els.scratchFillButton.addEventListener("click", fillScratchFromOutput);
  els.scratchClearButton.addEventListener("click", clearScratchPad);

  els.clearButton.addEventListener("click", () => {
    els.inputText.value = "";
    updateTool();
  });

  els.copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(els.outputText.value);
      els.copyButton.textContent = "Copied";
      window.setTimeout(() => {
        els.copyButton.textContent = "Copy";
      }, 850);
    } catch {
      els.outputText.select();
      document.execCommand("copy");
    }
  });

  els.submitAnswerButton.addEventListener("click", submitAnswer);
  els.hintButton.addEventListener("click", useHint);
  els.buyTimeButton.addEventListener("click", buyTime);
  els.newMissionButton.addEventListener("click", startMission);
  els.answerInput.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
      submitAnswer();
    }
  });
}

wireEvents();
updateTool();
syncRailButtons();
startMission();
requestAnimationFrame(runClock);

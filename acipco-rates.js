// acipco rates per state below - trying to get the sum of (rate + fuel) * miles = number i need
const state = process.env.STATE;
const miles = parseInt(process.env.MILES);
const acipcoRates = {
    "arizona": 2.95,
    "arkansasEast": 3.70,
    "arkansasWest": 3.85,
    "california": 2.75,
    "colorado": 3.30,
    "connecticut": 3.85,
    "delaware": 3.85,
    "dc": 3.85,
    "floridaNorth": 3.40,
    "floridaSouth": 3.80,
    "georgia": 3.25,
    "idaho": 2.80,
    "illinois": 3.25,
    "indiana": 3.40,
    "iowa": 2.80,
    "kansas": 2.90,
    "kentuckyEast": 4.05,
    "kentuckyWest": 3.80,
    "louisiana": 3.30,
    "maine": 3.85,
    "maryland": 3.85,
    "massachusettes": 3.85,
    "michiganNorth": 3.70,
    "michiganSouth": 3.20,
    "minnesota": 3.25,
    "mississippi": 3,
    "missouriEast": 3.50,
    "missouriWest": 3.60,
    "montana": 3.25,
    "nebraska": 2.90,
    "nevada": 2.75,
    "newHampshire": 3.85,
    "newJersey": 3.85,
    "newMexico": 2.95,
    "newYorkEast": 4,
    "newYorkWest": 3.85,
    "northDakota": 3.65,
    "ohio": 3.25,
    "oklahoma": 3.25,
    "oregon": 2.75,
    "pennsylvaniaEast": 3.70,
    "pennsylvaniaWest": 3.10,
    "rhodeIsland": 3.85,
    "southCarolina": 3.50,
    "southDakota": 3.20,
    "tennessee": 3,
    "texasEast": 3.10,
    "texasWest": 3.50,
    "utah": 2.80,
    "vermont": 3.85,
    "virginia": 3.70,
    "washington": 2.70,
    "westVirginia": 3.60,
    "wisconsin": 3.30,
    "wyoming": 2.90,

};

fuel = .68
rate = acipcoRates[state]

// this is the function i'm using to call the rate i need
function rateArg(mileage) {
    return (mileage * (fuel + rate))
}


console.log(rateArg(miles))

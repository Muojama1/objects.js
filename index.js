
              // QUESTION No 1.
function instagramPost(handleOfAuthor, content, anImageLinkPostedByTheAuthorOfThePost, numberOfViews, numberOfLikes) {
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.anImageLinkPostedByTheAuthorOfThePost = anImageLinkPostedByTheAuthorOfThePost;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}

            //  QUESTION NO 2.
const instagramPost2 = new instagramPost('Sandirva', 'DIY on how to make a base soap', 'anneta2.jpg', 512, 10,056);
const instagramPost3 = new instagramPost('Miss_ana', 'Creating wireframes for low fidelity designs', 'lowfidDesigns.jpg', 700, 1078);

console.log(instagramPost2)
console.log(instagramPost3)


            //  QUESTION NO 3.a
function createPerson(name, age, location) {
    return{
        name: name,
        age: age,
        location: location,
    };
}
const Musa = createPerson('Musa Dawodu', 19, 'Lekki Lagos')
console.log(Musa)

            //    QUESTION NO 3.b
function createJambScores(english, government, literature, crk) {
    return{
        english: english,
        government: government,
        literature: literature,
        crk: crk,
    } 
}
const Musa2 = createJambScores(70, 85, 82, 94)
console.log(Musa2)

// Adding the object as a property to Musa object created in (a) 
const Musa3 = {...Musa,...Musa2};
console.log(Musa3)


                //  QUESTION NO 4.
// 1) Using the Object.assign method
// example of Object.assign
const sandraShoe = {
    name: 'Zara',
    color: 'white',
    size: 40,
}
const anitaShoe = Object.assign({}, sandraShoe)
console.log(anitaShoe)

// 2) Using the spread method
// example of spread method
const sandraShoe = {
    name: 'Zara',
    color: 'white',
    size: 40,
}
const thersaShoe = {...sandraShoe}
console.log(thersaShoe)

// Using the JSON.parse method
// example of JSON.parse method
const sandraShoe = {
    name: 'Zara',
    color: 'white',
    size: 40,
}
const veraShoe = JSON.parse(JSON.stringify (sandraShoe));
console.log(veraShoe)


            //   QUESTION NO 5.
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}
for (const key in presidentialCandidates) {
        console.log(key)
        console.log(presidentialCandidates[key])
}


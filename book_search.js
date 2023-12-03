/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 



 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var result = {
        "SearchTerm": "",
        "Results": []
    };

    result.SearchTerm = searchTerm; //SearchTerm is always added to the result

    scannedTextObj.forEach(book => { //Iterates throughout the whole input JSON
        book.Content.forEach(section => {
            if(section.Text.includes(searchTerm)) {
                result.Results.push({ //Only adds to the output if the text contains the searchTerm
                        "ISBN" : book.ISBN,
                        "Page" : section.Page,
                        "Line" : section.Line
                });
            }
        })
    })
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. - POSITIVE */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. - POSITIVE */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

//Check to make sure that upperCase is different from lowerCase
const caseSensitivityInput = [ //Input
    {
        "Title": "Sample Book",
        "ISBN": "1234567890",
        "Content": [
            {
                "Page": 1,
                "Line": 1,
                "Text": "The darkness was overwhelming."
            },
            {
                "Page": 1,
                "Line": 2,
                "Text": "Suddenly, Darkness enveloped everything."
            },
            {
                "Page": 1,
                "Line": 3,
                "Text": "It was not just dark, it was DARKNESS."
            }
        ] 
    }
];

const expectedCaseSensitivityOutput = { //Output
    "SearchTerm": "darkness",
    "Results": [
        {
            "ISBN": "1234567890",
            "Page": 1,
            "Line": 1
        }
    ]
};

const caseSensitivityResult = findSearchTermInBooks("darkness", caseSensitivityInput);
if (JSON.stringify(expectedCaseSensitivityOutput) === JSON.stringify(caseSensitivityResult)) {
    console.log("PASS: Case Sensitivity Test");
} else {
    console.log("FAIL: Case Sensitivity Test");
    console.log("Expected:", JSON.stringify(expectedCaseSensitivityOutput, null, 2));
    console.log("Received:", JSON.stringify(caseSensitivityResult, null, 2));
}


const noMatchInput = [ //Input
    {
        "Title": "Mysterious Island",
        "ISBN": "9876543210",
        "Content": [
            {
                "Page": 10,
                "Line": 1,
                "Text": "The island was covered in green foliage."
            },
            {
                "Page": 10,
                "Line": 2,
                "Text": "Birds sang melodiously amongst the trees."
            },
            {
                "Page": 10,
                "Line": 3,
                "Text": "The sea was calm, reflecting the clear blue sky."
            }
        ] 
    }
];

const expectedNoMatchOutput = { //Output
    "SearchTerm": "panda",
    "Results": []
};

//Checks to make sure that the result returns nothing if searchTerm does not exist
const noMatchResult = findSearchTermInBooks("panda", noMatchInput);
if (JSON.stringify(expectedNoMatchOutput) === JSON.stringify(noMatchResult)) {
    console.log("PASS: No Match Test");
} else {
    console.log("FAIL: No Match Test");
    console.log("Expected:", JSON.stringify(expectedNoMatchOutput, null, 2));
    console.log("Received:", JSON.stringify(noMatchResult, null, 2));
}


const specialCharactersInput = [ //Input
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum. The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian's"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            }
        ] 
    }
];

const expectedSpecialCharactersOutput = { //Output
    "SearchTerm": "Canadian's",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
};

//Makes sure that special characters work
const specialCharactersResult = findSearchTermInBooks("Canadian's", specialCharactersInput);
if (JSON.stringify(expectedSpecialCharactersOutput) === JSON.stringify(specialCharactersResult)) {
    console.log("PASS: Special Characters Test");
} else {
    console.log("FAIL: Special Characters Test");
    console.log("Expected:", JSON.stringify(expectedSpecialCharactersOutput, null, 2));
    console.log("Received:", JSON.stringify(specialCharactersResult, null, 2));
}


const multipleOccurrencesInput = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "The ship sailed over the horizon."
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "The darkness of the ocean was mesmerizing."
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "In the depths, the fish swam past."
            }
        ] 
    }
];

const expectedMultipleOccurrencesOutput = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
        // Add additional results if "the" appears in more lines
    ]
};

//Makes sure that multiple instances of the search term works
const multipleOccurrencesResult = findSearchTermInBooks("the", multipleOccurrencesInput);
if (JSON.stringify(expectedMultipleOccurrencesOutput) === JSON.stringify(multipleOccurrencesResult)) {
    console.log("PASS: Multiple Occurrences Test");
} else {
    console.log("FAIL: Multiple Occurrences Test");
    console.log("Expected:", JSON.stringify(expectedMultipleOccurrencesOutput, null, 2));
    console.log("Received:", JSON.stringify(multipleOccurrencesResult, null, 2));
}

const emptyContentInput = [
    {
        "Title": "Empty Book",
        "ISBN": "0000000000",
        "Content": [] // Empty content array
    }
];

const expectedEmptyContentOutput = {
    "SearchTerm": "anything",
    "Results": []
};

//Tests to make sure output makes sense if there is no content in the book
const emptyContentResult = findSearchTermInBooks("anything", emptyContentInput);
if (JSON.stringify(expectedEmptyContentOutput) === JSON.stringify(emptyContentResult)) {
    console.log("PASS: Empty Content Test");
} else {
    console.log("FAIL: Empty Content Test");
    console.log("Expected:", JSON.stringify(expectedEmptyContentOutput, null, 2));
    console.log("Received:", JSON.stringify(emptyContentResult, null, 2));
}


/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    "entries": [
        {
            id: 1,
            date: "07/24/2025",
            concept: "HTML & CSS",
            entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
            mood: "Ok"
        },
        {
            id: 2,
            date: "04/16/2021",
            concept: "For Loops",
            entry: "We went through objects and how to loop through them. We learned about key-value pairs and proper syntax for them. We also delved into using for loops in functions",
            mood: "motivated"
        },
        {
            id: 3,
            date: "04/20/2021",
            concept: "JavaScript Functions and Scope",
            entry: "I went through the remainder problems in the muscle memory work for functions. I then finished the scope problems. I then started the Daily-Journal project.",
            mood: "tired",
        }
    ]
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const copyOfData = [...database.entries]
    return copyOfData
}
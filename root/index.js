const removeByValues = (arr, values) => {
    return arr.filter(item => !values.includes(item));
};

const regex1 = /([a-zA-Z]+)([\u4e00-\u9fa5]+)/g; // $1 is any English, $2 is any Chinese word
const regex1_reverse = /([\u4e00-\u9fa5]+)([a-zA-Z]+)/g; // reverse of regex1

const regex2 = /([\u4e00-\u9fa5]+)([0-9]+)/g; // $1 is any Chinese word, $2 is any number
const regex2_reverse = /([0-9]+)([\u4e00-\u9fa5]+)/g;  // reverse of regex2
const regex3 = /([a-zA-Z]+)([0-9]+)/g; // $1 is any English, $2 is any number
const regex3_reverse = /([0-9]+)([a-zA-Z]+)/g;  // reverse of regex3          

const regex4 = /([a-zA-Z]+)(\(+)/g;
const regex4_reverse = /(\)+)([a-zA-Z]+)/g;
const regex5 = /([\u4e00-\u9fa5]+)(\(+)/g;
const regex5_reverse = /(\)+)([\u4e00-\u9fa5]+)/g;
const regex6 = /([0-9]+)(\(+)/g;
const regex6_reverse = /(\)+)([0-9]+)/g;

let regex_list = [regex1, regex1_reverse, regex2, regex2_reverse, regex3, regex3_reverse, regex4, regex4_reverse, regex5, regex5_reverse, regex6, regex6_reverse];

let checkbox1 = document.getElementById("englist_chinese");
let checkbox2 = document.getElementById("number");
let checkbox3 = document.getElementById("parenthesis");

checkbox1.addEventListener("change", function () {
    if (checkbox1.checked) {
        regex_list.push(regex1, regex1_reverse);
    } else {
        regex_list = removeByValues(regex_list, [regex1, regex1_reverse]);
    }
});

checkbox2.addEventListener("change", function () {
    if (checkbox2.checked) {
        regex_list.push(regex2, regex2_reverse, regex3, regex3_reverse);
    } else {
        regex_list = removeByValues(regex_list, [regex2, regex2_reverse, regex3, regex3_reverse]);
    }
});

checkbox3.addEventListener("change", function () {
    if (checkbox3.checked) {
        regex_list.push(regex4, regex4_reverse, regex5, regex5_reverse, regex6, regex6_reverse);
    } else {
        regex_list = removeByValues(regex_list, [regex4, regex4_reverse, regex5, regex5_reverse, regex6, regex6_reverse]);
    }
});

function add_space(text) {
    for (let i = 0; i < regex_list.length; i++) {
        text = text.replace(regex_list[i], "$1 $2");
    }
    return text;
}

function generateSpace() {
    const inputText = document.getElementById("input").value;
    const space_text = add_space(inputText);
    document.getElementById("output").value = space_text;
}

function copy() {
    const outputText = document.getElementById("output").value;
    navigator.clipboard.writeText(outputText);
}

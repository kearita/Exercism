/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(remainingTime) {
    return remainingTime == 0 ? 'Lasagna is done.' :
        remainingTime === undefined ? 'You forgot to set the timer.' :
        'Not done, please wait.';
}

export function preparationTime(layers, avgPrepTime = 2) {
    return layers.length * avgPrepTime;
}

export function quantities(layers) {
    const result = { 'noodles': 0, 'sauce': 0 };
    let grams = 50;
    let liters = 0.2;
    for (let layer of layers) {
        if (layer in result) {
            result[layer] += (layer === 'noodles' ? grams : liters);
        }
    }
    return result;
}

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length-1]);
    return;
}

export function scaleRecipe(recipe, numPortions) {
    const scaled = {};
    let scaleFactor = numPortions / 2;
    for (let ingredient in recipe) {
        scaled[ingredient] = recipe[ingredient] * scaleFactor;
    }
    return scaled;
}

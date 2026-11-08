const multiplyValue = (value: number, multiplier?: number): number => {
    if (multiplier === undefined) {
        return value * 2;
    } else {
        return value * multiplier;
    }

}

multiplyValue(10);
multiplyValue(10, 5);
multiplyValue(7, 0);


const processInput = (value: (string | number | boolean)) => {
    if (typeof value === "string") {
        return value.trim().toLocaleLowerCase()
    } else if (typeof value === "number") {
        return value * 10
    } else {
        return value ? "Active" : "Inactive"
    }
}

// Sample Input:
processInput("  TypeScript  ");
processInput(7);
processInput(true);
processInput(false);


const formatCoordinate = (coordinate :readonly [number,number,string]): string => {
    const [latitude,longitude,locationName] = coordinate
    return `Location: ${locationName} (${latitude}, ${longitude})`

}

formatCoordinate([23.81, 90.41, "Dhaka"]);
formatCoordinate([22.35, 91.78, "Chittagong"]);
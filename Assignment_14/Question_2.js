let hospitals =
    [
        {
            "id": 1,
            "name": "Hospital A",
            "location": "Delhi",
            "noOfBeds": 450,
            "availability": "Yes"
        },
        {
            "id": 2,
            "name": "Hospital B",
            "location": "Pune",
            "noOfBeds": 150,
            "availability": "No"
        },
        {
            "id": 3,
            "name": "Hospital C",
            "location": "Pune",
            "noOfBeds": 350,
            "availability": "Yes"
        }
    ]

let bed = hospitals.filter(bd => bd.noOfBeds > 200);

console.log(bed);

let avl = hospitals.filter(av => av.availability === "Yes");

console.log(avl);

let loc = hospitals.filter(lc => lc.location === "Pune");

console.log(loc);
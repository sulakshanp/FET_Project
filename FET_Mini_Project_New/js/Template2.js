function genrateCV2() {
    console.log("Generating CV 2");

    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameTs");

    nameT1.innerHTML = nameField;

    //direct
    //setting template name with the name field
    document.getElementById("nameTs2").innerHTML = nameField;

    //setting profile picture

    const image_input = document.querySelector('#fileTag');
    var uploaded_image = "";

    image_input.addEventListener("change", function() {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            uploaded_image = reader.result
            document.querySelector('#previewImg2').style.backgroundImage = `url(${uploaded_image})`

        })
        reader.readAsDataURL(image_input.files[0])
    })



    //same for the contact
    document.getElementById("contactT2").innerHTML = document.getElementById("contactField").value;

    //address
    document.getElementById("addressT2").innerHTML = document.getElementById("addressField").value;

    //links
    document.getElementById("fbT2").innerHTML = document.getElementById("fbField").value;

    document.getElementById("linkedT2").innerHTML = document.getElementById("linkedField").value;

    document.getElementById("instaT2").innerHTML = document.getElementById("instaField").value;

    //objective

    document.getElementById("objectiveT2").innerHTML = document.getElementById("objectiveField").value;

    //work experience
    let wes = document.getElementsByClassName("weField");

    let str = "";

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT1").innerHTML = str;

    //Academic Experience

    let aqs = document.getElementsByClassName("aqField");

    let str2 = "";

    for (let e of aqs) {
        str2 = str2 + `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT1").innerHTML = str2;











    // document.getElementById("myTable2").innerHTML = str2;
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "none";
    document.getElementById("cv-template3").style.display = "none";
    document.getElementById("cv-template2").style.display = "block";

    /*document.getElementById("print").style.display = "block";*/

}

// function printCV2() {
//     console.log("in print functiont2")
//         // function download() {
//     totalDownloads2();
//     //weeklyDownloads();
//     const resumePdf = this.document.querySelector('#cv-template2');
//     console.log(resumePdf)
//         // console.log(resumePdf);
//         // console.log(window);
//     var opt = {
//         margin: 1,
//         filename: 'resume.pdf',
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };
//     html2pdf().from(resumePdf).set(opt).save();
// }

// var totalDownloads2 = () => {
//     let x;
//     $(document).ready(
//         () => {

//             $.ajax({
//                 url: "http://localhost:3000/Template2",
//                 method: "GET",
//                 dataType: "json",
//                 async: false,
//                 success: function(data) {
//                     console.log("fetched successfully total count: " + data.count);
//                     x = data.count;
//                     countDownloads2(x);
//                 },
//                 error: function() {
//                     console.log("Error fetching");
//                 }
//             });
//         }
//     );

// }

// // updating new download to db (POST)
// function countDownloads2(oldcount) {
//     let x = ++oldcount;
//     console.log(x)
//     var newCount = { id: 1, count: x };
//     var d = JSON.stringify(newCount);
//     $.ajax({
//         url: "http://localhost:3000/Template2",
//         method: "POST",
//         data: d,
//         contentType: 'application/json; charset=utf-8',
//         success: function() {
//             console.log("count saved succesfully " + d);
//         },
//         error: function() {
//             console.log("Error saving download count");
//         }
//     });
// }




function printCV2() {
    console.log("***********************************************************in print function of t3")
        // function download() {
    totalDownloads2();
    //weeklyDownloads();
    const resumePdf = this.document.querySelector('#cv-template2');
    console.log(resumePdf)
        // console.log(resumePdf);
        // console.log(window);
    var opt = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(resumePdf).set(opt).save();
}


var totalDownloads2 = () => {
    console.log("sulakshan - totaldownloads T3 code should not come here")
    let x;
    $(document).ready(
        () => {

            $.ajax({
                url: "http://localhost:3000/Template2",
                method: "GET",
                dataType: "json",
                async: false,
                success: function(data) {
                    console.log("fetched successfully total count: " + data.count);
                    x = data.count;
                    countDownloads2(x);
                },
                error: function() {
                    console.log("Error fetching");
                }
            });
        }
    );

}

// updating new download to db (POST)
function countDownloads2(oldcount) {
    let x = ++oldcount;
    console.log(x)
    var newCount = { id: 1, count: x };
    var d = JSON.stringify(newCount);
    $.ajax({
        url: "http://localhost:3000/Template2",
        method: "POST",
        data: d,
        contentType: 'application/json; charset=utf-8',
        success: function() {
            console.log("count saved succesfully " + d);
        },
        error: function() {
            console.log("Error saving download count");
        }
    });
}
var connToken = "90935243|-31949242485907777|90958418"; // Please replace this with your JsonPowerDB Connection Token
var dbName = "SCHOOL-DB";
var relName = "STUDENT-TABLE";
var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";

function resetForm() {
    $("#rollNo").val("");
    $("#fullName").val("");
    $("#class").val("");
    $("#birthDate").val("");
    $("#address").val("");
    $("#enrollmentDate").val("");
    
    $("#rollNo").prop("disabled", false);
    $("#fullName").prop("disabled", true);
    $("#class").prop("disabled", true);
    $("#birthDate").prop("disabled", true);
    $("#address").prop("disabled", true);
    $("#enrollmentDate").prop("disabled", true);
    
    $("#save").prop("disabled", true);
    $("#update").prop("disabled", true);
    $("#reset").prop("disabled", true);
    
    $("#rollNo").focus();
}

function validateAndGetFormData() {
    var rollNo = $("#rollNo").val();
    if (rollNo === "") {
        alert("Roll No is Required Value");
        $("#rollNo").focus();
        return "";
    }
    var fullName = $("#fullName").val();
    if (fullName === "") {
        alert("Full Name is Required Value");
        $("#fullName").focus();
        return "";
    }
    var className = $("#class").val();
    if (className === "") {
        alert("Class is Required Value");
        $("#class").focus();
        return "";
    }
    var birthDate = $("#birthDate").val();
    if (birthDate === "") {
        alert("Birth Date is Required Value");
        $("#birthDate").focus();
        return "";
    }
    var address = $("#address").val();
    if (address === "") {
        alert("Address is Required Value");
        $("#address").focus();
        return "";
    }
    var enrollmentDate = $("#enrollmentDate").val();
    if (enrollmentDate === "") {
        alert("Enrollment Date is Required Value");
        $("#enrollmentDate").focus();
        return "";
    }
    
    var jsonStrObj = {
        "Roll-No": rollNo,
        "Full-Name": fullName,
        "Class": className,
        "Birth-Date": birthDate,
        "Address": address,
        "Enrollment-Date": enrollmentDate
    };
    return JSON.stringify(jsonStrObj);
}

function getStudent() {
    var rollNoJsonObj = getRollNoAsJsonObj();
    var getRequest = createGET_BY_KEYRequest(connToken, dbName, relName, rollNoJsonObj);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({async: true});
    
    if (resJsonObj.status === 400) {
        $("#save").prop("disabled", false);
        $("#reset").prop("disabled", false);
        
        $("#fullName").prop("disabled", false);
        $("#class").prop("disabled", false);
        $("#birthDate").prop("disabled", false);
        $("#address").prop("disabled", false);
        $("#enrollmentDate").prop("disabled", false);
        
        $("#fullName").focus();
    } else if (resJsonObj.status === 200) {
        $("#rollNo").prop("disabled", true);
        fillData(resJsonObj);
        
        $("#fullName").prop("disabled", false);
        $("#class").prop("disabled", false);
        $("#birthDate").prop("disabled", false);
        $("#address").prop("disabled", false);
        $("#enrollmentDate").prop("disabled", false);
        
        $("#update").prop("disabled", false);
        $("#reset").prop("disabled", false);
        
        $("#fullName").focus();
    }
}

function getRollNoAsJsonObj() {
    var rollNo = $("#rollNo").val();
    var jsonStr = {
        "Roll-No": rollNo
    };
    return JSON.stringify(jsonStr);
}

function fillData(resJsonObj) {
    if (resJsonObj.status === 200) {
        var data = JSON.parse(resJsonObj.data);
        localStorage.setItem("recno", data.rec_no);
        var record = data.record;
        $("#fullName").val(record["Full-Name"]);
        $("#class").val(record["Class"]);
        $("#birthDate").val(record["Birth-Date"]);
        $("#address").val(record["Address"]);
        $("#enrollmentDate").val(record["Enrollment-Date"]);
    }
}

function saveData() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest(connToken, jsonStr, dbName, relName);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(putReqStr, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    
    if (resJsonObj.status === 200) {
        alert("Data saved successfully!");
    } else {
        alert("Failed to save data. Error: " + resJsonObj.message);
    }
    resetForm();
}

function updateData() {
    $("#update").prop("disabled", true);
    var jsonChg = validateAndGetFormData();
    if (jsonChg === "") {
        return;
    }
    var updateReqStr = createUPDATERecordRequest(connToken, jsonChg, dbName, relName, localStorage.getItem("recno"));
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(updateReqStr, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    
    if (resJsonObj.status === 200) {
        alert("Data updated successfully!");
    } else {
        alert("Failed to update data. Error: " + resJsonObj.message);
    }
    resetForm();
}

$(document).ready(function() {
    resetForm();
});

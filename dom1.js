function getCube(){

    let cube = document.getElementById("name").value;
    let cube_result = cube*cube*cube;

    let result = document.getElementsByClassName("result")[0];
    result.append(cube_result);
}
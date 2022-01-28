$(() => {
    // DIV Containers class "nav"
    const $div1 = $("<div>")
    const $div2 = $("<div>")
    const $div3 = $("<div>")
    $($div1).attr("class", "nav")
    $($div2).attr("class", "nav")
    $($div3).attr("class", "nav")
    $("body").append($div1, $div2, $div3)

    
});
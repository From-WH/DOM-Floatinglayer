$(clickMe).on('click', function () {
    if ($(popover).is(':hidden')) {
        $(popover).show();
    } else {
        $(popover).hide();
    }
    $(document).one('click', function () {
        $(popover).hide();
    });
})
$(wrapper).on('click', function (e) {
    e.stopPropagation()
})
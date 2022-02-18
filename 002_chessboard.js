// chessboard

BindingSize = 8
pattern = "#"
pattern2 = " "
for (counter_row=1; counter_row<=BindingSize; counter_row += 1) {
    if (counter_row%2==0) {
        linePattern = ""
        for (counter_col=1; counter_col<= BindingSize; counter_col += 1) {
            if (counter_col%2 == 0) {
                linePattern += pattern2
            } else {
                linePattern += pattern
            }
        }
        console.log(linePattern)
    } else {
        linePattern = ""
        for (counter_col = 1; counter_col <= BindingSize; counter_col += 1) {
            if (counter_col%2 == 0) {
                linePattern += pattern
            } else {
                linePattern += pattern2
            }
        }
        console.log(linePattern)
    }
}
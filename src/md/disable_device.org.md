# Disable devices

sudo apt install libinput-tools sudo libinput list-devices sudo apt
install evtest sudo evtest --grab /dev/input/event3 \> /dev/null 2\>&1 &

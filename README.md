# Description
===============

Battery indicator for iPhone (possible another iDevices and other phones). Generally, should work with anything that upower detects as phone.

# Installation
================

1. The easy way: Install from TBA GNOME Extensions Store

The other way: install from git:

1. From your terminal, go to "~/.local/share/gnome-shell/extensions";
2. Clone the source code: $ git clone https://github.com/lenyaz/iphonebattery.git
3. Restart gnome-shell: Alt + F2, type 'r' then hit Enter.

# Known issues
===============

1. Refresh time is 2 minutes by default (of DBusProxy) not yet figure out how to change it for now.
2. Only show battery for 1 keyboard, if you connect more than one then it will show the first keyb found.
3. The indicator does not hide when the keyboard is disconnected, but at least it still works when keyboard reconnects.

# Troubleshooting
===================

This extension retrieve device's info using DBusProxy & GlibUPower, if you ever notice any issue with the extension:
check if UPower can see your device, this extension can only see you device if UPower does: issue 'upower -d | grep phone -A 7' in your terminal.
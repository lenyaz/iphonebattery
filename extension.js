const ExtensionUtils = imports.misc.extensionUtils;
const iPower = ExtensionUtils.getCurrentExtension().imports.iPower;
const Log = iPower.Log;
const Main = imports.ui.main;

var btKeybBattIndicator;
function enable() {
	Log("enable");
	btKeybBattIndicator = new iPower.kBattIndicator();
	Main.panel.addToStatusArea('BtKeybBattIndicator', btKeybBattIndicator, 1);
}

function disable() {
	Log("Disable");
	iPower.dbusCon.signal_unsubscribe(btKeybBattIndicator.subIdAdd);
	iPower.dbusCon.signal_unsubscribe(btKeybBattIndicator.subIdRem);
	btKeybBattIndicator._proxy = null;
	btKeybBattIndicator.reset();
	btKeybBattIndicator.destroy();
	btKeybBattIndicator = null;
}

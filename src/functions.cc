#include "functions.h"
#include "windows.h"
#pragma comment(lib, "user32.lib")

//function that can Enumerate the attached displays
NAN_METHOD(enumDisplayCount) {
	int count = GetSystemMetrics(SM_CMONITORS);
	info.GetReturnValue().Set(count);
}

//function that can Request the displays to sleep
NAN_METHOD(sleepDisplay) {
	//Request the displays to sleep
	SendMessage(HWND_BROADCAST, WM_SYSCOMMAND, SC_MONITORPOWER, (LPARAM) 2);    
}

// NAN_METHOD(sleepDisplayMessage){
// 	//PostMessage to receive a return value for test purpose
// 	bool result = PostMessage(HWND_BROADCAST, WM_SYSCOMMAND, SC_MONITORPOWER, (LPARAM) 2); 
// 	info.GetReturnValue().Set(result);
// }

//function that can Request the displays to wake
NAN_METHOD(wakeDisplay) {
	//Request the displays to wake
	SendMessage(HWND_BROADCAST, WM_SYSCOMMAND, SC_MONITORPOWER, (LPARAM) -1);
}

// NAN_METHOD(wakeDisplayMessage){
// 	//PostMessage to receive a return value for test purpose
//     bool result = PostMessage(HWND_BROADCAST, WM_SYSCOMMAND, SC_MONITORPOWER, (LPARAM) -1); 
//     info.GetReturnValue().Set(result);
// }

//function that returns the last input time
NAN_METHOD(lastInputTime) {
	LASTINPUTINFO lastInput;
	lastInput.cbSize = sizeof(LASTINPUTINFO);
	GetLastInputInfo(&lastInput);
	
	// calculate elapsed time (in sec)
	int upTime = GetTickCount();
	int elapsedTime = (upTime - lastInput.dwTime) / 100;
	info.GetReturnValue().Set(elapsedTime);
}


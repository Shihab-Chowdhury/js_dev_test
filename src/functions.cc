#include "functions.h"
#include "windows.h"
#pragma comment(lib, "user32.lib")

NAN_METHOD(enumDisplayCount) {
	int count = GetSystemMetrics(SM_CMONITORS);
	info.GetReturnValue().Set(count);
}

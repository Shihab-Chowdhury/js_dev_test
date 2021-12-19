#include "functions.h"

using v8::FunctionTemplate;

NAN_MODULE_INIT(InitAll) {
    Nan::Set(target, Nan::New("enumDisplayCount").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(enumDisplayCount)).ToLocalChecked());

    Nan::Set(target, Nan::New("sleepDisplay").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(sleepDisplay)).ToLocalChecked());
    Nan::Set(target, Nan::New("sleepDisplayMessage").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(sleepDisplayMessage)).ToLocalChecked());

    Nan::Set(target, Nan::New("wakeDisplay").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(wakeDisplay)).ToLocalChecked());
    Nan::Set(target, Nan::New("wakeDisplayMessage").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(wakeDisplayMessage)).ToLocalChecked());

}

NODE_MODULE(addon, InitAll)
#include "functions.h"

using v8::FunctionTemplate;

NAN_MODULE_INIT(InitAll) {
    Nan::Set(target, Nan::New("enumDisplayCount").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(enumDisplayCount)).ToLocalChecked());

}

NODE_MODULE(addon, InitAll)
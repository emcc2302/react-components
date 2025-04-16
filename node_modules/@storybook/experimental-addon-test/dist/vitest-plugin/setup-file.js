'use strict';

var vitest = require('vitest');
var channels = require('storybook/internal/channels');

var transport={setHandler:vitest.vi.fn(),send:vitest.vi.fn()};globalThis.__STORYBOOK_ADDONS_CHANNEL__??=new channels.Channel({transport});var modifyErrorMessage=({task})=>{let meta=task.meta;if(task.type==="test"&&task.result?.state==="fail"&&meta.storyId&&task.result.errors?.[0]){let currentError=task.result.errors[0],storyUrl=`${undefined.__STORYBOOK_URL__}/?path=/story/${meta.storyId}&addonPanel=storybook/test/panel`;currentError.message=`
\x1B[34mClick to debug the error directly in Storybook: ${storyUrl}\x1B[39m

${currentError.message}`;}};vitest.afterEach(modifyErrorMessage);

exports.modifyErrorMessage = modifyErrorMessage;

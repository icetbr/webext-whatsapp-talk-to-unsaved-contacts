import { $ } from '@icetbr/utils/web';
import { waitForEl, el2 } from '@icetbr/utils/web';

window.icetbr = {
    hidden: true,

    redirect: e => {
        if (e.key !== 'Enter') return;
        //5547997305822
        window.location.href=`https://web.whatsapp.com/send/?phone=${e.currentTarget.value}&text&type=phone_number&app_absent=0`;
    },

    togglePhoneNumber: () => {
        $('#unsavedContactPhoneNumber').style.display = window.icetbr.hidden ? 'block' : 'none';
        window.icetbr.hidden = !window.icetbr.hidden;
    },
};

var init = () => {
    const style = 'outline: none; border:none; background-image:none; background-color:transparent; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; display: none; font-size: 14px; top: -2px;';
    const $input = el2(`<input id="unsavedContactPhoneNumber" placeholder="Phone number" title: "Ex: 5547999783456" class="Er7QU" style="${style}" onkeyup="icetbr.redirect(event)">`);

    const $searchBox = $('._3RN1i._3jaYl');
    $searchBox.appendChild($input);

    const iconSvg = `
        <svg viewBox="0 0 28 21" height="24" width="17" preserveAspectRatio="xMidYMid meet" class="" fill="none">
        <path fill="currentColor" d="M7.043 9.306c-3.85 2.223 2.024 13.234 6.237 10.802l3.906 6.765c-1.777 1.026-3.282 1.673-5.342.495C6.122 24.098-.176 13.194.004 6.69.066 4.431 1.397 3.546 3.138 2.541l3.906 6.765zm1.615-.184c-.416.24-.951.097-1.191-.319L3.784 2.425c-.24-.416-.097-.951.319-1.191L6.039.116c.416-.24.951-.097 1.192.319l3.682 6.378c.24.416.097.951-.319 1.191L8.658 9.122zm10.059 17.423c-.416.24-.951.097-1.191-.319l-3.682-6.378c-.24-.416-.097-.951.319-1.191l1.935-1.117c.416-.24.951-.097 1.192.319l3.682 6.378c.24.416.097.951-.319 1.191l-1.935 1.117z"/>
        </svg>
    `
    const $button = el2(`
        <div class="_3OtEr rOo0o" style="left: 15px; top: -1px;"><div class="_3ndVb" role="button" title="Send message to unsaved contact" onclick="icetbr.togglePhoneNumber()"><span>
        ${iconSvg}
        </span></div><span></span></div>
    `)

    // var $communityButton = $('[data-testid="menu-bar-community-tab"]');
    const $buttonsBar = $('._1sPvB._2XdMx span');
    $buttonsBar.prepend($button);

}

waitForEl('[data-testid="menu-bar-community-tab"]').then(init);

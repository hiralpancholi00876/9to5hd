module.exports = {
    Artist: function (data) {
        return `<!doctype html>
        <html lang="en-US">
        
        <head>
            <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
            <title>Booking Deposit Receipt</title>
            <meta name="description" content="Booking Deposit Receipt">
            <style type="text/css">
                a:hover {text-decoration: underline !important;}
            </style>
        </head>
        
        <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
            <!--100% body table-->
            <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
                style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
                <tr>
                    <td>
                        <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                            align="center" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="height:80px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align:center;">
                                  <a href="#" title="logo" target="_blank">
                                    <img height="70" src="${data.logoUrl}" title="logo" alt="logo">
                                  </a>
                                </td>
                            </tr>
                            <tr>
                                <td style="height:20px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td>
                                    <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                        style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                        <tr>
                                            <td style="height:40px;">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0 35px;">
                                                <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">New Booking Deposit Received</h1>
                                                <span
                                                    style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                                <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                    ${data.makeUpArtistName} Below is booking details
                                                    
                                                </p>
                                                <table style="width:500px;color:#455056; font-size:15px;line-height:24px; margin:30px auto 0px; border-color: #ddd; text-align:left; border-collapse: collapse;" border="1"  cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td style="padding: 11px;">User Name:</td>
                                                        <td style="padding: 11px;">${data.userName}</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding: 12px;">Start Date Time:</td>
                                                        <td style="padding: 12px;">${data.startDateTime}</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding: 12px;">Status:</td>
                                                        <td style="padding: 12px;">Confirm</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding: 12px;">Deposit Amount:</td>
                                                        <td style="padding: 12px;"><b>&#36;${data.depositAmount}</b></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                          <td style="padding:15px 0px 0px;" colspan="3">
                                            <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">Thank you</p>
                                            <p style="color:#455056; font-size:15px;line-height:24px; margin:0;"> We Are Makeup Team.</p>
                                          </td>
                                        </tr>
                                        <tr>
                                            <td style="height:40px;">&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                            <tr>
                                <td style="height:20px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align:center;">
                                    <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>We Are Makeup</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td style="height:80px;">&nbsp;</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <!--/100% body table-->
        </body>
        </html>`;
    },

    User: function (data) {
        return `<!doctype html>
        <html lang="en-US">
        
        <head>
            <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
            <title>Booking Deposit Receipt</title>
            <meta name="description" content="Booking Deposit Receipt">
            <style type="text/css">
                a:hover {text-decoration: underline !important;}
            </style>
        </head>
        
        <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
            <!--100% body table-->
            <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
                style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
                <tr>
                    <td>
                        <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                            align="center" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="height:80px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align:center;">
                                  <a href="#" title="logo" target="_blank">
                                    <img height="70" src="${data.logoUrl}" title="logo" alt="logo">
                                  </a>
                                </td>
                            </tr>
                            <tr>
                                <td style="height:20px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td>
                                    <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                        style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                        <tr>
                                            <td style="height:40px;">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0 35px;">
                                                <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">Your Booking Is Confirm</h1>
                                                <span
                                                    style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                                <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                    ${data.userName} Below is your booking details
                                                    
                                                </p>
                                                <table style="width:500px;color:#455056; font-size:15px;line-height:24px; margin:30px auto 0px; border-color: #ddd; text-align:left; border-collapse: collapse;" border="1"  cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td style="padding: 11px;">Makeup Artist Name:</td>
                                                        <td style="padding: 11px;">${data.makeUpArtistName}</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding: 12px;">Start Date Time:</td>
                                                        <td style="padding: 12px;">${data.startDateTime}</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding: 12px;">Status:</td>
                                                        <td style="padding: 12px;">Confirm</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding: 12px;">Deposit Amount:</td>
                                                        <td style="padding: 12px;"><b>&#36;${data.depositAmount}</b></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                          <td style="padding:15px 0px 0px;" colspan="3">
                                            <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">Thank you</p>
                                            <p style="color:#455056; font-size:15px;line-height:24px; margin:0;"> We Are Makeup Team.</p>
                                          </td>
                                        </tr>
                                        <tr>
                                            <td style="height:40px;">&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                            <tr>
                                <td style="height:20px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="text-align:center;">
                                    <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>We Are Makeup</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td style="height:80px;">&nbsp;</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <!--/100% body table-->
        </body>
        </html>`;
    }
}


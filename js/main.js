   $('.form-select').on('change', function () {
            var selected = $(this).find("option:selected").val();
                switch(selected) {
                  case "ANA":
                    ANA();
                    break;
                        case "ARI":
                    ARI();
                    break;
                        case "ATL":
                    ATL();
                    break;
                        case "BAL":
                    BAL();
                    break;
                        case "BOS":
                    BOS();
                    break;
                        case "CHA":
                    CHA();
                    break;
                        case "CHN":
                    CHN();
                    break;
                        case "CIN":
                    CIN();
                    break;
                        case "CLE":
                    CLE();
                    break;
                        case "COL":
                    COL();
                    break;
                        case "DET":
                    DET();
                    break;
                        case "HOU":
                    HOU();
                    break;
                        case "KCA":
                    KCA();
                    break;
                        case "LAN":
                    LAN();
                    break;
                        case "MIA":
                    MIA();
                    break;
                        case "MIL":
                    MIL();
                    break;
                        case "MIN":
                    MIN();
                    break;
                        case "NYA":
                    NYA();
                    break;
                        case "NYN":
                    NYN();
                    break;
                        case "OAK":
                    OAK();
                    break;
                        case "PHI":
                    PHI();
                    break;
                        case "PIT":
                    PIT();
                    break;
                        case "SDN":
                    SDN();
                    break;
                        case "SEA":
                    SEA();
                    break;
                        case "SFN":
                    SFN();
                    break;
                        case "SLN":
                    SLN();
                    break;
                        case "TBA":
                    TBA();
                    break;
                        case "TEX":
                    TEX();
                    break;
                        case "TOR":
                    TOR();
                    break;
                        case "WAS":
                    WAS();
                    break;
                  default:
                    // code block
                }           
        })
    
function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}
var globalTeam;
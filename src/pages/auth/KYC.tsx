import React, { useState, useEffect } from "react";
import { BiCamera } from "react-icons/bi";
import { DOB, Input, Selects } from "../../components/UI/Input";
import { Button2 } from "../../components/UI/Button";
import PageLayout from "../../layouts/PageLayout";
import profile from "../../images/authimg/profile.png";
import logout from "../../images/authimg/logout.png";
import circle from "../../images/authimg/circle.png";
import earp from "../../images/authimg/earpiece.png";
import sett from "../../images/authimg/setting.png";
import arrl from "../../images/authimg/arrow-left.png";
import def_prof from "../../images/authimg/def_prof.png";
import { doKyc, getuser } from "../../services/apiservices";
import { alertActions } from "../../components/component/alertActions";
import { useNavigate } from "react-router-dom";
import { doLogoutplatform } from "../../services/logout";
import { useSelector } from "react-redux";

function KYC() {
  const nav = useNavigate();

  const user2 = JSON.parse(localStorage.getItem("account") || "{}");
  const token = localStorage.getItem("token");
  const [image, setImage] = useState(def_prof);
  const [loading, setloading] = useState(false);
  const [show, setshow] = useState(false);
  const [gender, setgender] = useState("");
  const [dob, setdob] = useState("");
  const [address, setaddress] = useState("");
  const [qualification, setqualification] = useState("");
  const [nationality, setnationality] = useState("");

  const tokend = useSelector((state: any) => state.counter.token);
  const userid = useSelector((state: any) => state.counter.userid);
  console.log(tokend);

  useEffect(() => {
    const toks = localStorage.getItem("token");
    console.log(toks);
    const getToken = {
      headers: {
        Authorization: "Bearer " + toks,
      },
    };
    const getuserKYC = async () => {
      try {
        const userKyc = await getuser(userid ? userid : user2?.id, getToken);
        if (userKyc.status == 200) {
          console.log(userKyc);
          const kyc = userKyc?.data?.data?.KYC;
          setgender(kyc.gender);
          setdob(kyc.dob);
          setaddress(kyc.address);
          setnationality(kyc.nationality);
          setqualification(kyc.qualification);
        }
      } catch (error) {}
    };
    getuserKYC();
  }, []);

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const doSave = async () => {
    if (!gender || !nationality || !qualification) {
      alertActions.success("Ensure all fields are entered");
      return;
    }
    const mdob = dob.split("-");
    const mdob2 = `${mdob[2]}/${mdob[1]}/${mdob[0]}`;
    setloading(true);
    const kycObj = {
      gender: gender.toLowerCase(),
      dob: mdob2,
      address: address.toLowerCase(),
      nationality: nationality.toLowerCase(),
      qualification: qualification.toLowerCase(),
    };
    var headert = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    try {
      const kyc = await doKyc(kycObj, headert);
      if (kyc.status == 200) {
        setloading(false);
        alertActions.success("Account updated successfully");
        nav("/kyc");
      }
    } catch (error: any) {
      if (error?.code == "ERR_NETWORK") {
        alertActions.error(error?.message);
      } else {
        alertActions.error(error?.response?.data?.message);
      }
      setloading(false);
    }
  };

  const doLogout = () => {
    localStorage.removeItem("account");
    localStorage.removeItem("token");

    alertActions.success("Logout successful");
    nav("/", { replace: true });
  };
  return (
    <PageLayout needfooter={false}>
      <div className="relative w-full px-20 pt-32">
        <img
          src={arrl}
          className="absolute left-[200px] top-[70px] cursor-pointer"
          onClick={() => {
            nav("/dashboard", { replace: true });
          }}
        />
        <div className="flex w-[90%] gap-10 m-auto  justify-center">
          <div className="bg-[#FFF] w-[30%] h-[450px] rounded-[8px]">
            <div className="h-[40%]  flex flex-col items-center p-5">
              <div className="h-[100px] w-[100px] rounded-[100px] relative ">
                <div className="cursor-pointer absolute bottom-1 right-[12px] w-[20px] h-[20px] bg-[purple] rounded-[20px] flex justify-center items-center">
                  <label htmlFor="file" className="cursor-pointer">
                    <BiCamera className="fill-[#FFF] cursor-pointer" />
                  </label>
                </div>
                <input
                  type="file"
                  id="file"
                  onChange={onImageChange}
                  className="hidden"
                />

                <img src={image} className="w-full h-full rounded-[100px] " />

                {/* <img alt="preview image" src={image} /> */}
              </div>

              <p className="text-[20px]">
                {user2?.last_name + " " + user2?.first_name}
              </p>
              <p className="text-[14px]"> {user2?.email}</p>
            </div>
            <div className="h-[60%]  ">
              <div className="w-full h-[50px] gap-3 flex px-7 items-center cursor-pointer border-[] border-t-2">
                <img src={earp} />
                <p className="text-[18px]">KYC</p>
              </div>
              <div className="w-full h-[50px] gap-3  flex px-7  items-center cursor-pointer border-[] border-t-2">
                <img src={sett} />
                <p className="text-[18px]">Account settings</p>
              </div>
              <div className="w-full h-[50px] gap-3  flex px-7  items-center cursor-pointer border-[] border-t-2">
                <img src={circle} />
                <p className="text-[18px]">Help</p>
              </div>
              <div
                className="w-full h-[50px] gap-3  flex px-7  items-center cursor-pointer border-[] border-t-2"
                onClick={doLogout}
              >
                <img src={logout} />
                <p className="text-[18px]">Log out</p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFF] p-5 w-[50%] rounded-[8px]">
            <p className="text-[24px]">KYC</p>

            <Selects
              name="gender"
              value={gender}
              label="Gender"
              valueArr={["Male", "Female"]}
              onchange={(e) => setgender(e.target.value)}
            />
            <DOB
              label="Date of birth"
              onchange={(e) => setdob(e.target.value)}
              name="dob"
              value={dob}
              onblur={() => setshow(true)}
            />
            <Input
              name="addres"
              label="Address"
              value={address}
              onchange={(e) => setaddress(e.target.value)}
            />
            <Selects
              name="nationality"
              label="Nationality"
              value={nationality}
              valueArr={["USA", "Nigeria", "Uganda", "Liberia"]}
              onchange={(e) => setnationality(e.target.value)}
            />
            <Selects
              name="qualification"
              value={qualification}
              label="Qualification"
              valueArr={["BSc", "HND", "OND", "Certificate"]}
              onchange={(e) => setqualification(e.target.value)}
            />
            <div className="flex justify-end w-full mt-4">
              <div className="w-[100px] h-[40px]">
                {" "}
                <Button2
                  variant="default"
                  text1={loading ? "Saving..." : "Save"}
                  onclick={doSave}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default KYC;

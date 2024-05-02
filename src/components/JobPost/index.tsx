import { useEffect, useState } from "react";
import Card from "@mui/material/Card";

// styles imports
import classes from "./index.module.css";

// local imports
import { JobData } from "./types";
import PostedCard from "./PostedCard";
import EasyApplyButton from "../EasyApplyButton";
import ReferralButton from "../ReferralButton";

function getCurrencySymbol(currencyCode: string) {
  const numberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  });
  const parts = numberFormat.formatToParts(1);
  return parts[0].value;
}

function getCurrencySuffix(currencyCode: string) {
  if (currencyCode === "INR") return "LPA";

  return "k";
}

const JobPost = () => {
  const [jobData, setJobData] = useState<JobData | undefined>(undefined);

  useEffect(() => {
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        limit: 10,
        offset: 0,
      }),
    })
      .then((res) => res.json())
      .then((data) => setJobData(data.jdList[0]));
  }, []);

  const minSalary =
    (jobData?.minJdSalary ?? 10) +
    (jobData?.salaryCurrencyCode
      ? getCurrencySuffix(jobData.salaryCurrencyCode)
      : "");
  const maxSalary =
    (jobData?.maxJdSalary ?? 15) +
    (jobData?.salaryCurrencyCode
      ? getCurrencySuffix(jobData.salaryCurrencyCode)
      : "");

  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 360,
      }}
    >
      <PostedCard days={10} />
      <div className={classes.jobDetails}>
        <img src="" alt="" />
        <div className={classes.details}>
          <span className={classes.companyName}>fampay</span>
          <span style={{ fontSize: "16px" }}>{jobData?.jobRole}</span>
          <span className={classes.jobLocation}>{jobData?.location}</span>
        </div>
      </div>
      <span style={{ fontWeight: 300, fontSize: 14 }}>
        Estimated Salary:{" "}
        {jobData?.salaryCurrencyCode &&
          getCurrencySymbol(jobData.salaryCurrencyCode)}
        {minSalary} - {maxSalary}
      </span>
      <div className={classes.companyDetails}>
        <span>About the Company:</span>
        <span>About us</span>
        <span style={{ fontWeight: 300, overflow: "hidden" }}>
          {jobData?.jobDetailsFromCompany}
        </span>
        <span className={classes.showMore}>Show More</span>
      </div>
      <div className={classes.experienceDetails}>
        <span>Mimimum Experience</span>
        <span style={{ fontWeight: 300 }}>
          {jobData?.minExp ?? 0} year
          {jobData?.minExp && jobData?.minExp > 1 ? "s" : ""}
        </span>
      </div>
      <EasyApplyButton />
      <ReferralButton />
    </Card>
  );
};

export default JobPost;

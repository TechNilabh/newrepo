import { cn } from "./lib/utils";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { IconUpload } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";

const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const FileUpload = ({
  onChange
}) => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (newFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    onChange && onChange(newFiles);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    onDrop: handleFileChange,
    onDropRejected: (error) => {
      console.log(error);
    },
  });

  return (
    (<div className="yesw-full" {...getRootProps()}>
      <motion.div
        onClick={handleClick}
        whileHover="animate"
        className="yesp-10 yesgroup/file yesblock yesrounded-lg yescursor-pointer yesw-full yesrelative yesoverflow-hidden">
        <input
          ref={fileInputRef}
          id="file-upload-handle"
          type="file"
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="yeshidden" />
        <div
          className="yesabsolute yesinset-0 [mask-image:yesradial-gradient(ellipse_at_center,white,transparent)]">
          <GridPattern />
        </div>
        <div className="yesflex yesflex-col yesitems-center yesjustify-center">
          <p
            className="yesrelative yesz-20 yesfont-sans yesfont-bold yestext-neutral-700 dark:yestext-neutral-300 yestext-base">
            Upload file
          </p>
          <p
            className="yesrelative yesz-20 yesfont-sans yesfont-normal yestext-neutral-400 dark:yestext-neutral-400 yestext-base yesmt-2">
            Drag or drop your files here or click to upload
          </p>
          <div className="yesrelative yesw-full yesmt-10 yesmax-w-xl yesmx-auto">
            {files.length > 0 &&
              files.map((file, idx) => (
                <motion.div
                  key={"file" + idx}
                  layoutId={idx === 0 ? "file-upload" : "file-upload-" + idx}
                  className={cn(
                    "yesrelative yesoverflow-hidden yesz-40 yesbg-white dark:yesbg-neutral-900 yesflex yesflex-col yesitems-start yesjustify-start md:yesh-24 yesp-4 yesmt-4 yesw-full yesmx-auto yesrounded-md",
                    "yesshadow-sm"
                  )}>
                  <div className="yesflex yesjustify-between yesw-full yesitems-center yesgap-4">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                      className="yestext-base yestext-neutral-700 dark:yestext-neutral-300 yestruncate yesmax-w-xs">
                      {file.name}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                      className="yesrounded-lg yespx-2 yespy-1 yesw-fit yesflex-shrink-0 yestext-sm yestext-neutral-600 dark:yesbg-neutral-800 dark:yestext-white yesshadow-input">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </motion.p>
                  </div>

                  <div
                    className="yesflex yestext-sm md:yesflex-row yesflex-col yesitems-start md:yesitems-center yesw-full yesmt-2 yesjustify-between yestext-neutral-600 dark:yestext-neutral-400">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                      className="yespx-1 yespy-0.5 yesrounded-md yesbg-gray-100 dark:yesbg-neutral-800 yes">
                      {file.type}
                    </motion.p>

                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} layout>
                      modified{" "}
                      {new Date(file.lastModified).toLocaleDateString()}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            {!files.length && (
              <motion.div
                layoutId="file-upload"
                variants={mainVariant}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={cn(
                  "yesrelative yesgroup-hover/file:shadow-2xl yesz-40 yesbg-white dark:yesbg-neutral-900 yesflex yesitems-center yesjustify-center yesh-32 yesmt-4 yesw-full yesmax-w-[8rem] yesmx-auto yesrounded-md",
                  "yesshadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
                )}>
                {isDragActive ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="yestext-neutral-600 yesflex yesflex-col yesitems-center">
                    Drop it
                    <IconUpload className="yesh-4 yesw-4 yestext-neutral-600 dark:yestext-neutral-400" />
                  </motion.p>
                ) : (
                  <IconUpload className="yesh-4 yesw-4 yestext-neutral-600 dark:yestext-neutral-300" />
                )}
              </motion.div>
            )}

            {!files.length && (
              <motion.div
                variants={secondaryVariant}
                className="yesabsolute yesopacity-0 yesborder yesborder-dashed yesborder-sky-400 yesinset-0 yesz-30 yesbg-transparent yesflex yesitems-center yesjustify-center yesh-32 yesmt-4 yesw-full yesmax-w-[8rem] yesmx-auto yesrounded-md"></motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>)
  );
};

export function GridPattern() {
  const columns = 41;
  const rows = 11;
  return (
    (<div
      className="yesflex yesbg-gray-100 dark:yesbg-neutral-900 yesflex-shrink-0 yesflex-wrap yesjustify-center yesitems-center yesgap-x-px yesgap-y-px yes yesscale-105">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;
          return (
            (<div
              key={`${col}-${row}`}
              className={`w-10 h-10 flex flex-shrink-0 rounded-[2px] ${
                index % 2 === 0
                  ? "bg-gray-50 dark:bg-neutral-950"
                  : "bg-gray-50 dark:bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
              }`} />)
          );
        }))}
    </div>)
  );
}
